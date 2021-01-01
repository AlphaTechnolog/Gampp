const os = require('os')

const $if = (condition, value) => {
    if (condition) {
        return value;
    } else {
        return '';
    }
}

const $map = (array, cb) => {
    return array.map((item, i) => {
        return cb(item, i);
    }).join('\n');
}

exports.genHTMLTree = (content, url) => {
    return `
        <!DOCTYPE html>
        <html lang='es'>
            <head>
                <meta charset='utf-8'>
                <title>Content of /servers${url}</title>
            </head>
            <body>
                <h1>Content of /servers${url}</h1>
                <ul>
                    <li>
                        <b>ACT<b>&nbsp; <a href='${url}'>Refresh</a>
                    </li>

                    ${$if(url !== '/', '<li><b>DIR</b>&nbsp; <a href="../">..</a></li>')}

                    ${$map(content.directories, function(item) {
                        return `
                            <li>
                                <b>DIR</b>
                                &nbsp;<a href='./${item}'>${item}</a>
                            </li>
                        `
                    })}

                    ${$map(content.files, function(item) {
                        return `
                            <li>
                                <b>FILE</b>
                                <a href='./${item}'>${item}</a>
                            </li>
                        `
                    })}
                </ul>
                <footer>
                    <hr>
                    <p><i>GAMPP on \`${os.platform()}\` - \`${os.version()}\`</i></p>
                </footer>
            </body>
        </html>
    `
}