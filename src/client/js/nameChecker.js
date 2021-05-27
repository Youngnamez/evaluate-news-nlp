
function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }

    if (regexCheck(inputText) == false) {
        return false;
    }
    return true;
}

function regexCheck(text) {
    // Found helpful regex help here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    return new RegExp('^[a-zA-Z]+$').test(text);
}

export { checkForName, regexCheck }
