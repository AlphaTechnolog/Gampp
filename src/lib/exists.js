const fs = require('fs');

exports.exists = function(url) {
    return new Promise(resolve => {
        fs.exists(url, function(exists) {
            resolve(exists);
        });
    });
}