const fs = require('fs');

exports.getFiles = async function(url) {
    try {
        const dir = await fs.promises.opendir(url);
        const content = { files: [], directories: [] };

        for await (const dirent of dir) {
            let cont = true

            if (url === '/servers/') {
                const toIgnore = [
                    '.used.txt',
                    'asset-manifest.json',
                    'index.html',
                    'service-worker.js',
                    'static',
                    '[S]: precache-manifest'
                ]

                toIgnore.forEach(ignoreValue => {
                    if (ignoreValue.split('[S]: ')[0] === '') {
                        if (dirent.name.split('precache-manifest')[0] === '') {
                            if (ignoreValue.split('[S]: ')[1] ===
                                dirent.name.split('.')[0]) {
                                cont = false
                            }
                        }
                    } else {
                        if (dirent.name === ignoreValue) {
                            cont = false
                        }
                    }
                });
            }

            if (dirent.isDirectory() && cont) {
                content.directories.push(dirent.name);
            } else if (cont) {
                content.files.push(dirent.name);
            }
        }

        content.directories.sort();
        content.files.sort();

        return content;
    } catch (err) {
        throw err;
    }
}
