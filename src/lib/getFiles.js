const fs = require('fs');

exports.getFiles = async function(url) {
    try {
        const dir = await fs.promises.opendir(url);
        const content = { files: [], directories: [] };

        for await (const dirent of dir) {
            if (dirent.isDirectory()) {
                content.directories.push(dirent.name);
            } else {
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