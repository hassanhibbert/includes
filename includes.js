/**
 * @param inputValue { Object, Array, Number, String }
 * @param searchList { Array }
 * @param options { Object: properties { all, prop } }
 */

function includes(inputValue, searchList, options) {

  // update options object
  options = Object.prototype.toString.call(options) === '[object Object]' ? options : {};
  options.all = typeof options.all === 'boolean' ? options.all : true;
  options.prop = typeof options.prop === 'string' ? options.prop : false;

  // set method name to be used when searching arrays
  var arrayMethod = options.all ? 'every' : 'some',

  // helper methods
  searchArrayWithObjects = function (input, list, prop) {
    return list.some(function (item) {
      return item[prop] === input[prop];
    });
  },

  searchArray = function (input, list) {
    return list.indexOf(input) >= 0;
  },

  getResults = function (inputItem, searchList, prop) {
    return options.prop
      ? searchArrayWithObjects(inputItem, searchList, prop)
      : searchArray(inputItem, searchList);
  },

  result = Array.isArray(inputValue)
    ? inputValue[arrayMethod](function (item) {
        return getResults(item, searchList, options.prop);
      })
    : getResults(inputValue, searchList, options.prop);

  return result;
}