"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _incognito = require("incognito");

var _incognito2 = _interopRequireDefault(_incognito);

var DateTime = (function () {
	function DateTime() {
		var initialDate = arguments[0] === undefined ? new Date() : arguments[0];

		_classCallCheck(this, DateTime);

		var _ = (0, _incognito2["default"])(this);
		_._mDateTime = (0, _moment2["default"])(initialDate);
		Object.defineProperties(this, {
			"mDateTime": {
				enumerable: true,
				get: function get() {
					return _._mDateTime;
				}
			}
		});
	}

	_createClass(DateTime, [{
		key: "toDate",
		value: function toDate() {
			return (0, _incognito2["default"])(this)._mDateTime.toDate();
		}
	}, {
		key: "add",
		value: function add() {
			var _privateData$_mDateTime;

			(_privateData$_mDateTime = (0, _incognito2["default"])(this)._mDateTime).add.apply(_privateData$_mDateTime, arguments);
		}
	}, {
		key: "compare",
		value: function compare(target) {
			//compare this date time with another one
			return (0, _incognito2["default"])(this)._mDateTime.diff(target.mDateTime);
		}
	}, {
		key: "isAhead",
		value: function isAhead(target) {
			return this.compare(target) >= 0;
		}
	}]);

	return DateTime;
})();

exports["default"] = DateTime;
module.exports = exports["default"];