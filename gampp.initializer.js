const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const enviroment = require('./enviroment.javascript')
require('colors')

const argv = process.argv.slice(2);

async function bootstrapValidator() {
    const rootdir = argv[0];
    const validatorObject = await exec(`python3 ${rootdir}/gampp.dirsvalidator.py ${rootdir}`);
    const out = validatorObject.stdout.trim().split('-');

    if (out[0] === 'False') {
        console.log(`[I]: Creating dir: "${out[1]}"`.blue.bold);
        await exec(`sudo mkdir -p ${out[1]}`)
        await exec(`sudo chmod -R 777 ${out[1]}`);
        await bootstrapValidator();
    }
}

(async function() {
    await bootstrapValidator();

    if (argv.length === 1) {
        console.log('[F]: Invalid arguments, select one of `start`'.red.bold)
        process.exit(1)
    }
    
    const rootdir = argv[0];
    const action = argv[1];
    
    switch (action) {
        case 'start':
            start();
            break
    }
    
    async function start() {
        console.log(`[S]: Gampp is listening at port ${enviroment.port}`.green.bold)
        const { stdout } = await exec(`python3 ${rootdir}/gampp.start.py ${rootdir}`)
        console.log(stdout.trim())
    }
}());