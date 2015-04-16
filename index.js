var emoji = require('./emoji');
exports.getMap = function(){
    return emoji;
}
exports.replaceToUnicode = function(text){
    return text.replace(/\:[a-z\d\_\-\+]+\:/g, function(str) {
        var key = str.slice(1, str.length - 1);
        return emoji[key] || str;
    });
}
