const fetch = require('node-fetch');

module.exports = (url, options) => {
    return new Promise((resolve, reject) => {
        fetch(url, options)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => reject(err));
    });
}