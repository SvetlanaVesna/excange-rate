const sanitize = require('sanitize-filename');

const fromUrl = (url) => `${sanitize(url, { replacement: '-' })}.json`;

exports.fromUrl = fromUrl;
