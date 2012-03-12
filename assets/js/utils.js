var regExpBeginning = /^\s+/;
var regExpEnd = /\s+$/;

// console.log wrapper
function log() {
    if (typeof console == 'undefined') {
        return;
    }
    return console.log.apply(console, arguments);
}

// Supprime les espaces inutiles en début et fin de la chaîne passée en paramètre.
function trim(aString) {
    return aString.replace(regExpBeginning, "").replace(regExpEnd, "");
}

function AjaxSimpleRequest(url) {
    var XMLHTTP = Try.these(

    function() {
        return new XMLHttpRequest()
    }, function() {
        return new ActiveXObject('Msxml2.XMLHTTP')
    }, function() {
        return new ActiveXObject('Microsoft.XMLHTTP')
    }) || false;
    if (XMLHTTP) {
        XMLHTTP.open("GET", url, false);
        XMLHTTP.send(null);
    } else {
        log("Could not create XMLHTTP object");
    }
    return trim(XMLHTTP.responseText);
}

function import_js(url) {
    // Check if given url already exists in head part.
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++)
    	if (scripts[i].src.match(".*" + url + "$")) return;
    // Add url.
    var script = new Element("script");
    script.text = AjaxSimpleRequest(url);
    document.getElementsByTagName("head")[0].appendChild(script);
    script.src = url;
}