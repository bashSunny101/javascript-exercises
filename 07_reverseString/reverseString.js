const reverseString = function(word) {
    let reverseString = "";
    for(let i=word.length; i>=0;i--) {
        reverseString += word.charAt(i);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
