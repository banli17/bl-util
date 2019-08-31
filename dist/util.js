(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["blUtil"] = factory();
	else
		root["blUtil"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _md = __webpack_require__(1);

var _currency = __webpack_require__(2);

var datefn = _interopRequireWildcard(__webpack_require__(3));

var strfn = _interopRequireWildcard(__webpack_require__(5));

var type = _interopRequireWildcard(__webpack_require__(4));

var _debounce = __webpack_require__(6);

var _findLevel = __webpack_require__(7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var blUtil = _objectSpread({}, datefn, strfn, type, {
  currency: _currency.currency,
  debounce: _debounce.debounce,
  findLevel: _findLevel.findLevel,
  md5: _md.md5,

  /**
   * 将 byte 转成 kb 或 Mb
   * @param byte 字节长度
   * @returns {string} mb或kb
   */
  covertByte: function covertByte(_byte) {
    var k = Math.floor(_byte / 1024);
    var m = Math.floor(_byte / 1024 / 1024);
    return k < 1024 ? k + 'kb' : m + 'mb';
  },
  validNoEmpty: function validNoEmpty(value) {
    if (/^\s*$/.test(value) || !value) {
      return false;
    }

    return true;
  },

  /**
   * 表单验证方法
   * [
   *   {
   *      name: 'phone',
   *      value: '17607055128',
   *      type: 'phone'
   *   },
   *   {
   *      name: 'idcard',
   *      value: '17607055128',
   *      type: 'idcard'
   *   }
   * ]
   */
  validForm: function validForm(fields, tip) {
    for (var i = 0; i < fields.length; i++) {
      var _fields$i = fields[i],
          regExp = _fields$i.regExp,
          _type = _fields$i.type,
          value = _fields$i.value,
          title = _fields$i.title,
          required = _fields$i.required; // 默认必填，如果指定非必填则跳过

      if (typeof required == 'boolean' && !required) {
        continue;
      }

      if (regExp) {
        if (!regExp.test(value)) {
          tip("".concat(title, "\u683C\u5F0F\u4E0D\u6B63\u786E"));
          return false;
        }
      } // 如果是base64,说明是默认图片


      if (_type === 'image') {
        if (/data:image/.test(value)) {
          tip("\u8BF7\u8F93\u5165".concat(title));
          return false;
        }
      } // 验证是否有值


      if (/^\s*$/.test(value) || value == null) {
        tip("\u8BF7\u8F93\u5165".concat(title));
        return false;
      } // 验证值的有效性


      if (_type === 'phone') {
        if (!/^(\d{11}|\d{3}\s\d{4}\s\d{4})$/.test(value)) {
          tip("".concat(title, "\u683C\u5F0F\u4E0D\u6B63\u786E"));
          return false;
        }
      }

      if (_type === 'password') {
        if (!(value.length > 3 && value.length < 15)) {
          tip("".concat(title, "\u957F\u5EA6\u5927\u4E8E3\u4E2A\u5B57\u7B26\uFF0C\u5C0F\u4E8E15\u4E2A\u5B57\u7B26"));
          return false;
        }
      }

      if (_type === 'city') {
        if (!value[0]) {
          tip("\u8BF7\u8F93\u5165".concat(title));
          return false;
        }
      }
    }

    return true;
  },

  /**
   * 分享
   */
  toCamelCase: function toCamelCase(str) {
    return str.charAt(0) + str.substring(1).replace(/[-_](\w)/g, function (a, b) {
      return b.toUpperCase();
    });
  },
  isArray: function isArray(obj) {
    try {
      return Object.prototype.toString.call(obj) === '[object Array]';
    } catch (e) {
      return false;
    }
  },
  // 比较2个数据是否相等, 包含基本类型、数组
  isAllRequal: function isAllRequal(o1, o2) {
    try {
      return o1.toString() === o2.toString();
    } catch (e) {
      return false;
    }
  },
  isEmptyObject: function isEmptyObject(obj) {
    try {
      return !Object.keys(obj).length;
    } catch (e) {
      return false;
    }
  },

  /**
   * 判断一个对象是否有某个属性
   * 比如 obj: [{a: 1}]， hasProp(obj[0], 'a')
   */
  hasProp: function hasProp(obj, prop) {
    try {
      return obj.hasOwnProperty(prop);
    } catch (e) {
      return false;
    }
  },
  arrayToObject: function arrayToObject(ary, key) {
    var res = {};
    ary.map(function (item) {
      res[item[key]] = item;
    });
    return res;
  }
});

var _default = blUtil;
exports["default"] = _default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.md5 = void 0;

var md5 = function createHash(string) {
  function RotateLeft(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  }

  function AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 0x80000000;
    lY8 = lY & 0x80000000;
    lX4 = lX & 0x40000000;
    lY4 = lY & 0x40000000;
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

    if (lX4 & lY4) {
      return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }

    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 0x40000000 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }

  function F(x, y, z) {
    return x & y | ~x & z;
  }

  function G(x, y, z) {
    return x & z | y & ~z;
  }

  function H(x, y, z) {
    return x ^ y ^ z;
  }

  function I(x, y, z) {
    return y ^ (x | ~z);
  }

  function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  ;

  function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  ;

  function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  ;

  function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  ;

  function ConvertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;

    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }

    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }

  ;

  function WordToHex(lValue) {
    var WordToHexValue = "",
        WordToHexValue_temp = "",
        lByte,
        lCount;

    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }

    return WordToHexValue;
  }

  ;

  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }

    return utftext;
  }

  ;
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7,
      S12 = 12,
      S13 = 17,
      S14 = 22;
  var S21 = 5,
      S22 = 9,
      S23 = 14,
      S24 = 20;
  var S31 = 4,
      S32 = 11,
      S33 = 16,
      S34 = 23;
  var S41 = 6,
      S42 = 10,
      S43 = 15,
      S44 = 21;
  string = Utf8Encode(string);
  x = ConvertToWordArray(string);
  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;

  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }

  var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
  return temp.toLowerCase();
};

exports.md5 = md5;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currency = void 0;

var currency = function currency(money) {
  money = "".concat(money).replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 补齐00

  if (!money.includes('.')) {
    money += '.00';
  }

  return "\uFFE5".concat(money);
};

exports.currency = currency;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateToDay = dateToDay;
exports.datejs = datejs;
exports.formatDate = exports.getCountDays = exports.formatWorkDate = exports.dateToRemain = exports.addZero = exports.toTimestamp = exports.formatDate1 = void 0;

var _type = __webpack_require__(4);

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 将时间戳转成日期
 * @param da 时间戳
 * @returns {string}
 */
var formatDate1 = function formatDate1(da) {
  var d = new Date(parseInt(da * 1000));
  var c = new Date().getFullYear() - d.getFullYear();
  var mc = new Date().getMonth() - d.getMonth();
  var dc = new Date().getDate() - d.getDate();
  var year = c < 4 ? ['', '去年', '前年', '大前年'][c] : String(d.getFullYear()).substring(2) + '年';
  var day = mc == 0 && dc < 4 ? ['', '昨天', '前天', '大前天'][dc] || '' : d.getMonth() + 1 + '月' + d.getDate() + '日';
  return year + day + d.getHours() + '点' + (d.getMinutes() == 0 ? '' : d.getMinutes() + '分');
};
/**
 * 将日期转时间戳
 * 1. 2018-01-01
 * 2. 2018年01月01日
 * 3. 20180101
 * 4. Date类型
 * @param date
 */


exports.formatDate1 = formatDate1;

var toTimestamp = function toTimestamp(date) {
  var res; // 如果是字符串，转成2018/01/01（2018-01-01不兼容，需要使用/），再转时间戳

  if (typeof date == 'string') {
    res = new Date(date.replace(/(\d{4}).*(\d{2}).*(\d{2})/g, '$1/$2/$3'));
  } else {
    res = date;
  }

  return res.getTime() / 1000;
};

exports.toTimestamp = toTimestamp;

var addZero = function addZero(i) {
  i = Number(i);
  return i < 10 ? '0' + i : i;
};
/**
 * 将秒转成倒计时时间格式
 * @param seconds
 * @returns {*}
 *
 * 60s -> 1分
 */


exports.addZero = addZero;

var dateToRemain = function dateToRemain(seconds) {
  var days = parseInt(seconds / 3600 / 24);
  var hours = parseInt((seconds - days * 3600 * 24) / 3600);
  var mins = parseInt((seconds - days * 3600 * 24 - hours * 3600) / 60);
  var secs = seconds - (days * 3600 * 24 + hours * 3600 + mins * 60);
  var desc = '天时分秒';
  var res = [days, hours, mins, secs].reduce(function (a, b, i) {
    // console.log('a',a, 'b',b, i)
    return b == 0 ? a : a + b + desc.charAt(i);
  }, '');
  return res;
};
/**
 * 将时间戳转成聊天、朋友圈形式的格式，如 昨天 15:22
 * @param timestamp 时间戳
 * @returns {string}
 */


exports.dateToRemain = dateToRemain;

var _formatWorkDate = function formatWorkDate(timestamp) {
  var d = null;

  if (timestamp.toString().length != 10) {
    d = new Date(parseInt(timestamp));
  } else {
    d = new Date(parseInt(timestamp * 1000));
  }

  var c = new Date().getFullYear() - d.getFullYear();
  var mc = new Date().getMonth() - d.getMonth();
  var dc = new Date().getDate() - d.getDate();
  var year = c < 4 ? ['', '去年', '前年', '大前年'][c] : String(d.getFullYear()).substring(2) + '年';
  var day = mc == 0 && dc < 4 ? ['', '昨天', '前天', '大前天'][dc] : d.getMonth() + 1 + '月' + d.getDate() + '日';
  return year + day + addZero(d.getHours()) + '点' + (d.getMinutes() == 0 ? '' : addZero(d.getMinutes()) + '分');
};
/**
 * 获取当前日期是星期几
 * @param date 2018-10-01
 */


exports.formatWorkDate = _formatWorkDate;

function dateToDay(date) {
  return new Date("".concat(date).replace(/-/g, '/')).getDay();
}
/**
 *
 * @param monthDayNum
 * @returns {number}
 */


var getCountDays = function getCountDays(month) {
  var curDate = new Date("".concat(month, "/01").replace(/-/g, '/'));
  /* 获取当前月份 */

  var curMonth = curDate.getMonth();
  /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */

  curDate.setMonth(curMonth + 1);
  /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */

  curDate.setDate(0);
  /* 返回当月的天数 */

  return curDate.getDate();
};

exports.getCountDays = getCountDays;

function _getRelativeMonth(timestamp, relative) {
  var year = new Date(timestamp).getFullYear();
  var month = new Date(timestamp).getMonth() + Number(relative);
  return datejs(new Date(year, month).getTime());
}

function getRelativeSeconds(timestamp, relative) {
  return formatDate(timestamp + relative * 1000, 'y-m-d h:i:s', 'ms');
}

function _getRelativeMinutes(timestamp, relative) {
  return getRelativeSeconds(timestamp, relative * 60);
}
/**
 * 根据差额获取日期，比如
 * @param date
 */


function _getRelativeDate(timestamp, relative) {
  return getRelativeSeconds(timestamp, relative * 24 * 60 * 60);
}
/**
 * 将时间戳等转成 'y-m-d h:i:s' 等格式
 * @param timestampType: s秒 ms毫秒，默认是s
 * @param type: 格式
 *  - y-m-d h:i:s
 *  - m-d h:i
 *  - week 转成星期几
 * @returns {string} 返回如2018-10-11 08:08:08
 */


var formatDate = function formatDate() {
  var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y-m-d h:i:s';
  var timestampType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 's';

  // 用于处理timestamp 为 '2018-09-09 09:09:00' 格式
  if (isNaN(Number(timestamp))) {
    // 将-转成/
    try {
      if (timestamp.length < 8) return timestamp;
      timestamp = timestamp.replace(/-/g, '/'); // 有时 - 不兼容，需要改成/

      return formatDate(new Date(timestamp).getTime(), format, 'ms');
    } catch (e) {
      console.warn(e);
    }
  } // 没有横杠形式 20190101


  if (timestamp.length == 8) {
    return timestamp.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
  } // php的时间戳是以秒为单位，js是以毫秒为单位


  var d = new Date(timestampType == 's' ? timestamp * 1000 : timestamp);
  var time = {
    y: d.getFullYear(),
    yy: String(d.getFullYear()).substring(2),
    // 短的
    m: addZero(d.getMonth() + 1),
    mm: d.getMonth() + 1,
    d: addZero(d.getDate()),
    dd: d.getDate(),
    h: addZero(d.getHours()),
    i: addZero(d.getMinutes()),
    s: addZero(d.getSeconds()) // 返回数字：周几

  };

  if (format == 'week') {
    return dateToDay("".concat(time.y, "/").concat(time.m, "/").concat(time.d));
  } // 返回中文：周几


  if (format == 'week_cn') {
    var weeks = '日一二三四五六七';
    return weeks[dateToDay("".concat(time.y, "/").concat(time.m, "/").concat(time.d))];
  }

  try {
    var formatArr = /^\w+$/.test(format) ? format.split('') : format.split(/\b/);
    return formatArr.map(function (f) {
      return /\w/.test(f) ? time[f] : f;
    }).join('');
  } catch (e) {
    console.error('params format is need same as "yy-mm-dd hh:mm:ss"');
  }
};

exports.formatDate = formatDate;

function getDaysCount(timestamp) {
  var date = new Date(timestamp);
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  return date.getDate();
}

function normalizeDate(date) {
  if (/NaN/.test(date)) {
    return new Date().getTime();
  } // 2019-03-01 但是不是2019-03-23T03:21:00.691Z 或 Sat Mar 23 2019 11:27:52 GMT+0800 (中国标准时间)


  if (/-/.test(date) && !/T/.test(date)) {
    date = date.replace(/-/g, '/');
  } // 如果是 2019/03 格式，修改为2019/03/01形式


  if (/^\d{4}[\s\S]?\d{1,2}$/.test(date)) {
    return date + '/01';
  }

  return date;
}
/**
 * 获取日期区间内的月份
 * 如 2019-03 到 2019-05 返回数组 ['2019-03','2019-04','2019-05']
 */


function rangeYMArray() {
  var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var endTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var reg = /[-\/]/;

  var _startTime$split = startTime.split(reg),
      _startTime$split2 = _slicedToArray(_startTime$split, 2),
      startY = _startTime$split2[0],
      startM = _startTime$split2[1];

  var _endTime$split = endTime.split(reg),
      _endTime$split2 = _slicedToArray(_endTime$split, 2),
      endY = _endTime$split2[0],
      endM = _endTime$split2[1];

  var arr = [];

  for (var i = startY; i <= endY; i++) {
    var start = i == startY ? startM : 1;
    var end = i < endY ? 12 : endM;

    for (var j = start; j <= end; j++) {
      arr.push(i + '-' + addZero(j));
    }
  }

  return arr;
}
/**
 * 返回日期各种格式化的对象
 * @param {日期转换} date和可传入Date()的格式一致
 */


function datejs() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();
  // 处理兼容性
  date = new Date(normalizeDate(date));
  var timestamp = date.getTime();
  return {
    timestamp: timestamp,
    // 毫秒
    year: date.getFullYear().toString(),
    month: addZero(date.getMonth() + 1).toString(),
    date: date.getDate().toString(),
    day: date.getDay(),
    daysCount: getDaysCount(timestamp),
    // 这里要防止date被重写
    day_cn: '日一二三四五六'[date.getDay()],
    ymd: formatDate(timestamp, 'y-m-d', 'ms'),
    ymdhi: formatDate(timestamp, 'y-m-d h:i', 'ms'),
    ymdhis: formatDate(timestamp, 'y-m-d h:i:s', 'ms'),
    ym: formatDate(timestamp, 'y-m', 'ms'),
    md: formatDate(timestamp, 'm-d', 'ms'),
    getRelativeMonth: function getRelativeMonth(relative) {
      return _getRelativeMonth(timestamp, relative);
    },
    getRelativeMinutes: function getRelativeMinutes(relative) {
      return _getRelativeMinutes(timestamp, relative);
    },
    getRelativeDate: function getRelativeDate(relative) {
      return _getRelativeDate(timestamp, relative);
    },
    format: function format(_format) {
      return formatDate(timestamp, _format, 'ms');
    },
    formatWorkDate: function formatWorkDate() {
      return _formatWorkDate.bind(null, timestamp);
    },
    rangeYMArray: rangeYMArray
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainArray = exports.isPlainObject = exports.isNumber = exports.isObject = exports.isArray = exports.isString = void 0;

var type = function type(o) {
  return /\s(\w+)]/.exec(Object.prototype.toString.call(o))[1].toLowerCase();
};

var isString = function isString(o) {
  return type(o) === 'string';
};

exports.isString = isString;

var isArray = function isArray(o) {
  return type(o) === 'array';
};

exports.isArray = isArray;

var isObject = function isObject(o) {
  return type(o) === 'object';
};
/**
 * 判断是否为数字，排除NaN
 * @param o
 * @returns {boolean}
 */


exports.isObject = isObject;

var isNumber = function isNumber(o) {
  return type(Number(o)) === 'number' && !isNaN(o);
};

exports.isNumber = isNumber;

var isPlainObject = function isPlainObject(o) {
  return type(o) === 'object' && !Object.keys(o).length;
};

exports.isPlainObject = isPlainObject;

var isPlainArray = function isPlainArray(o) {
  return type(o) === 'array' && !o.length;
};

exports.isPlainArray = isPlainArray;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCamelCase = toCamelCase;
exports.toPascalCase = toPascalCase;
exports.charCodeAt = charCodeAt;
exports.hideString = void 0;

/**
 * 将名字隐藏为 *
 * @param str
 * @returns {string}
 */
var hideString = function hideString() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof str !== 'string') {
    console.warn("hideString: not a string".concat(str));
    return;
  }

  if (full) {
    return str.replace(/^(.+)(.)$/, function (a, b, c) {
      return '*'.repeat(b.length) + c;
    });
  }

  return '*' + str.toString().charAt(str.length - 1);
};

exports.hideString = hideString;

function toCamelCase() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.replace(/(?:_)([a-zA-Z])/g, function (a, b) {
    return b.toUpperCase();
  });
}

function toPascalCase() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.replace(/(?:\b|_)([a-zA-Z])/g, function (a, b) {
    return b.toUpperCase();
  });
}

function charCodeAt() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var chars = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      chars.push(str.codePointAt(i).toString(16));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return chars[index];
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = void 0;

var debounce = function debounce(callback) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var timer = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      callback && callback.apply(void 0, args);
    }, time);
  };
};

exports.debounce = debounce;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLevel = void 0;

/**
 * 
 * @param {*} value 值
 * @param {*} levels 级别数组
 * @param {*} key 键
 * value: 15
 * levels:
 * [{
 *  full: 10
 * },{
 *  full: 20
 * }]
 * key: full
 */
var findLevel = function findLevel(value, levels, key) {
  // 首先判断边界
  if (value < levels[0][key]) return -1;
  if (value > levels[levels.length - 1][key]) return levels.length - 1; // 可以改成二分法，找随机法

  var cur = 0;
  var pos = 0;

  while (levels[cur]) {
    var m = levels[cur][key];

    if (value == m) {
      break;
    }

    if (value < m) {
      pos--;
      break;
    }

    if (value > m) {
      pos++;
      cur++;
    }
  }

  return pos;
};

exports.findLevel = findLevel;

/***/ })
/******/ ])["default"];
});