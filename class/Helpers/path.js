const path = require("path");
function getPath(pathName = String, replace = '../..') {

    return path.join(__dirname, replace, pathName)
}
module.exports = getPath;