
const fs = require('fs');

const fileNames = require('../lib/file-names');
const path = require('path');

const FILE_FOLDER = path.join(__dirname, '..', 'files');

module.exports = (req, res, next) => {
    const filename = `${FILE_FOLDER}/${fileNames.fromUrl(req.url)}`;

    fs.exists(filename, existFlag => {
        if (!existFlag) next(new Error(`File ${filename} does not exist`));

        res.set('Content-Type', 'application/json; charset=UTF-8');
        fs.createReadStream(filename).pipe(res);
    });
};
