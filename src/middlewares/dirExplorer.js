const { exists } = require('../lib/exists')
const { getFiles } = require('../lib/getFiles')
const { genHTMLTree } = require('../lib/genHTMLTree')
const os = require('os');

class DirExplorer {
    async _explorer(req, res) {
        try {
            const { url } = req;
            const existsDir = await exists(`/servers${url}`);
            if (!existsDir && url.split('/')[url.split('/').length - 1] !== 'json') {
                res.status(404).send(`/servers${url} no exists!`);
            } else {
                const obtained = await getFiles(`/servers/${url}`);
                const splitedUrl = url.split('/');
                
                if (splitedUrl[splitedUrl.length - 1] !== 'json') {
                    res.send(genHTMLTree(obtained, url));
                } else {
                    res.json({ ...obtained, url, });
                }
            }
        } catch (err) {
            const { url } = req;
            const splitedUrl = url.split('/');
            let dirent = url.split('/');
            dirent.pop();
            if (dirent.join() === '') dirent[0] = '/'
            dirent = dirent.join('/')
            dirent = `/servers${dirent}`
            if (splitedUrl[splitedUrl.length - 1] !== 'json') {
                res.status(404).send(`/servers${url} no exists!`);
            } else{
                const obtained = await getFiles(dirent).catch(err => console.log(err));
                if (obtained) {
                    res.status(200).json({ ...obtained, url: dirent, platform: os.platform(), version: os.version() });
                } else {
                    res.status(404).json({
                        error: true,
                        msg: `Invalid address ${dirent}`
                    });
                }
            }
        }
    }
}

module.exports = DirExplorer