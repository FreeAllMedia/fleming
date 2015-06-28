"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libFlemingJs = require("../lib/fleming.js");

var _libFlemingJs2 = _interopRequireDefault(_libFlemingJs);

describe("DateTime()", function () {
	var today = undefined,
	    dt = undefined,
	    tomorrow = undefined,
	    weekLater = undefined;

	beforeEach(function () {
		dt = new _libFlemingJs2["default"]();
		today = new Date();
		tomorrow = new Date(today);
		tomorrow.setDate(today.getDate() + 1);
		weekLater = new Date(today);
		weekLater.setDate(today.getDate() + 7);
	});

	describe("constructor", function () {
		it("should build now as the default date", function () {
			dt.toDate().toDateString().should.equal(today.toDateString());
		});

		it("should accept a date as a parameter", function () {
			dt = new _libFlemingJs2["default"](tomorrow);
			dt.toDate().should.eql(tomorrow);
		});
	});

	describe("(instance methods)", function () {
		describe(".add(number, string)", function () {
			it("should add a day to the datetime", function () {
				dt.add(1, "day");
				dt.toDate().toDateString().should.eql(tomorrow.toDateString());
			});

			it("should add more than one day to the datetime", function () {
				dt.add(7, "days");
				dt.toDate().toDateString().should.eql(weekLater.toDateString());
			});
		});

		describe(".add(object)", function () {
			it("should add more than one day to the datetime with object args", function () {
				dt.add({ days: 7 });
				dt.toDate().toDateString().should.eql(weekLater.toDateString());
			});
		});

		describe(".toDate()", function () {
			it("should get the js datetime object", function () {
				dt = new _libFlemingJs2["default"](today);
				dt.toDate().should.eql(today);
			});
		});

		describe(".utc()", function () {
			it("should return the datetime in utc time");
		});
	});
});