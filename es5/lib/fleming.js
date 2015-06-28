"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var moment = require("moment");

var DateTime = (function () {
	function DateTime() {
		var initialDate = arguments[0] === undefined ? new Date() : arguments[0];

		_classCallCheck(this, DateTime);

		Object.defineProperties(this, {
			"mDateTime": {
				enumerable: false,
				writable: true,
				value: moment(initialDate)
			}
		});
	}

	_createClass(DateTime, [{
		key: "toDate",
		value: function toDate() {
			return this.mDateTime.toDate();
		}
	}, {
		key: "add",
		value: function add() {
			var _mDateTime;

			(_mDateTime = this.mDateTime).add.apply(_mDateTime, arguments);
		}
	}]);

	return DateTime;
})();

exports["default"] = DateTime;
module.exports = exports["default"];