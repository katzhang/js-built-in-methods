/**
 * String.fromCharCode()
 *
 * @param {number1, number2, ...numbern} A sequence of numbers that are Unicode values.
 * @returns {string} Returns a string but not String object.
 */
console.log(String.fromCharCode(65, 66, 67)); //Outputs "ABC"

/**
 * String.prototype.charAt(index)
 *
 * @param {number1} An index between 0 and length of the string minus 1.
 * @returns {string} Returns the indexed character as a string.
 */
console.log('abc'.charAt(1)); //Outputs "b"
console.log('abc'.charAt(-1)); //Outputs ""

/**
 * String.prototype.charCodeAt(index)
 *
 * @param {number1} An index between 0 and length of the string minus 1.
 * @returns {number} Returns the indexed character code.
 */
console.log('abc'.charCodeAt(1)); //Outputs 98
console.log('abc'.charCodeAt(-1)); //Outputs NaN

/**
 * String.prototype.indexOf(searchValue[, fromIndex])
 *
 * @param {string} A string representing the value to search for.
 * @returns {number} Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
 */
console.log('abc'.indexOf('a')); //Outputs 0
console.log('abc'.indexOf('d')); //Outputs -1
console.log('abc'.indexOf('a', -3)); //Outputs 0

/**
 * String.prototype.lastIndexOf(searchValue[, fromIndex])
 *
 * @param {string} A string representing the value to search for.
 * @returns {number} Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex backwards. Returns -1 if the value is not found.
 */
console.log('abca'.lastIndexOf('a')); //Outputs 3
console.log('abca'.lastIndexOf('a', 2)); //Outputs 0






/**
 * String.prototype.concat(string1, string2, ...stringn)
 *
 * @param {string} Strings to concatenate.
 * @returns {string} Returns the new string.
 */
console.log('abc'.concat('d', 'e')); //Outputs "abcde"
//Note: strongly recommend using "+" or "+=" operators instead of the native concat method.





/**
 * String.prototype.match(regex)
 *
 * @param {regex} A regular expression to search.
 * @returns {array} Returns an array of the matched results. Null if none matches.
 */
console.log('abcabc'.match(/a/)); //Outputs ["a"]

/**
 * String.prototype.replace(regexp|substr, newSubStr|function[,   flags]);
 *
 * @param {regex | string} A pattern or a substring to be replaced.
 * @param {string | function} A new substring to replace or a function that is executed on the old string and return a new substring.
 * @returns {string} Returns a new string.
 */
console.log('abcabc'.replace(/a/, 'n')); //Outputs "nbcabc"

/**
 * String.prototype.search(regex)
 *
 * @param {regex} A regular expression to search for.
 * @returns {index} Returns the index of the first match of the regular expression inside the string. Otherwise, it returns -1.
 */
console.log('abcabc'.search(/a/)); //Outputs 0
console.log('abcabc'.search(/e/)); //Outputs -1








/**
 * String.prototype.link(url)
 *
 * @param {string} The URL as the anchor's href attribute.
 * @returns {string} Returns the HTML snippet.
 */
console.log('this is a google link'.link('http://www.google.com')); //Outputs "<a href="http://www.google.com">this is a google link</a>"





 /**
 * String.prototype.slice(beginIndex[, endIndex])
 *
 * @param {index} Pass in the index where to begin extraction and optionally the index to end extraction (not including).
 * @returns {string} Returns the sliced string.
 */
console.log('abcd'.slice(1, 2)); //Outputs "b"

 /**
 * String.prototype.substring(beginIndex[, endIndex])
 *
 * @param {index} Pass in the index where to begin extraction and optionally the index to end extraction (not including).
 * @returns {string} Returns the sliced string.
 */
console.log('abcd'.substring(1, 2)); //Outputs "b"
console.log('abcd'.substring(2, 1)); //Outputs "b"

 /**
 * String.prototype.substr(beginIndex[, length])
 *
 * @param {index} Pass in the index where to begin extraction and optionally the length (number of characters).
 * @returns {string} Returns the sub string.
 */
console.log('abcde'.substr(1)); //Outputs "bcde"
console.log('abcde'.substr(-1)); //Outputs "e"
console.log('abcde'.substr(1,3)); //Outputs "bcd"
console.log('abcde'.substr(1,-3)); //Outputs ""











 /**
 * String.prototype.split(separator) (counterpart of Array.prototype.join())
 *
 * @param {separator} Pass in the index where to begin extraction and optionally the index to end extraction (not including).
 * @returns {array} Returns the sliced string.
 */
console.log('abc'.split()); //Outputs ["abc"]
console.log('abc'.split('')); //Outputs ["a", "b", "c"]
console.log('a,b,c'.split(',')); //Outputs ["a", "b", "c"]

 /**
 * String.prototype.toLowerCase()
 *
 * @returns {string} Returns the old string converted to lowercase characters.
 */
console.log('AbC'.toLowerCase()); //Outputs "abc"

 /**
 * String.prototype.toUpperCase()
 *
 * @returns {string} Returns the old string converted to lowercase characters.
 */
console.log('AbC'.toUpperCase()); //Outputs "ABC"

 /**
 * String.prototype.trim()
 *
 * @returns {string} Returns the string. White space removed from both ends.
 */
console.log('AbC'.toUpperCase()); //Outputs "ABC"







