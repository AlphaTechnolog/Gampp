const { promisify } = require('util');
const _exec = promisify(require('child_process').exec);
const enviroment = require('./enviroment.javascript')
require('colors')

const exec = async (command) => {
    const { stdout } = await _exec(command);
    console.log(stdout.trim());
}

const argv = process.argv.slice(2);

async function bootstrapValidator() {
    const rootdir = argv[0];
    const validatorObject = await _exec(`python3 ${rootdir}/gampp.dirsvalidator.py ${rootdir}`);
    const out = validatorObject.stdout.trim().split('-');

    if (out[0] === 'False') {
        console.log(`[I]: Creating dir: "${out[1]}"`.blue.bold);
        await exec(`sudo mkdir -p ${out[1]}`)
        await exec(`sudo chmod -R 777 ${out[1]}`);
        await bootstrapValidator();
    }
}

function error(msg) {
    console.log(`[E]: ${msg}`.red.bold);
    process.exit(1);
}

(async function() {
    await bootstrapValidator();

    if (argv.length === 1) {
        console.log('[F]: Invalid arguments, select one of `start` `use-theme` `show-themes` `used-theme` `clear-theme` `help`'.red.bold)
        process.exit(1)
    }
    
    const rootdir = argv[0];
    const action = argv[1];
    
    switch (action) {
        case 'start':
            start();
            break
        case 'use-theme':
            useTheme()
            break
        case 'show-themes':
            showThemes()
            break
        case 'used-theme':
            usedTheme()
            break
        case 'clear-theme':
            clearTheme()
            break
        case 'help':
            help()
            break
        default:
            console.log('[E]: Invalid action:'.red.bold)
            help()
            break
    }
    
    async function start() {
        console.log(`[S]: Gampp is listening at port ${enviroment.port}`.green.bold)
        await exec(`python3 ${rootdir}/gampp.start.py ${rootdir}`)
    }

    async function useTheme() {
        const themeName = argv[2];

        if (!themeName || themeName === '') {
            error('Invalid theme name');
        }

        await exec(`python3 ${rootdir}/gampp.themeswitcher.py ${rootdir} "${themeName}"`);
    }

    async function showThemes() {
        await exec(`python3 ${rootdir}/gampp.themeshower.py ${rootdir}`);
    }

    async function usedTheme() {
        await exec(`python3 ${rootdir}/gampp.usedthemeshower.py ${rootdir}`);
    }

    async function clearTheme() {
        await exec(`python3 ${rootdir}/gampp.themeclearer.py ${rootdir}`);
    }

    async function help() {
        console.log(`
usage: gampp [start] [use-theme THEME] [show-themes]
             [used-theme] [help]

Init a http server... it look as lampp or apache, but it is maked with express.
In it you must to make your own dir explorer themes with React.js

optional commands:
  help            Show this log and exit.
  start           Start gampp service.
  use-theme THEME Switch to specified theme.
  show-themes     Show the available themes.
  used-theme      Show the used theme.
        `.trim())
    }
}());
