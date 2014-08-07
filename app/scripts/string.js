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
 * @returns {array} Returns an array of all the matched results. Null if none matches.
 */


















