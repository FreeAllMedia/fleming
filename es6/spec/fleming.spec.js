import DateTime from "../lib/fleming.js";

describe("DateTime()", () => {
	let today, dt, tomorrow, weekLater;

	beforeEach(() => {
		dt = new DateTime();
		today = new Date();
		tomorrow = new Date(today);
		tomorrow.setDate(today.getDate()+1);
		weekLater = new Date(today);
		weekLater.setDate(today.getDate()+7);
	});

	describe("constructor", () => {
		it("should build now as the default date", () => {
			dt.toDate().toDateString().should.equal(today.toDateString());
		});

		it("should accept a date as a parameter", () => {
			dt = new DateTime(tomorrow);
			dt.toDate().should.eql(tomorrow);
		});
	});

	describe("(instance methods)", () => {
		describe(".add(number, string)", () => {
			it("should add a day to the datetime", () => {
				dt.add(1, "day");
				dt.toDate().toDateString().should.eql(tomorrow.toDateString());
			});

			it("should add more than one day to the datetime", () => {
				dt.add(7, "days");
				dt.toDate().toDateString().should.eql(weekLater.toDateString());
			});
		});

		describe(".add(object)", () => {
			it("should add more than one day to the datetime with object args", () => {
				dt.add({days: 7});
				dt.toDate().toDateString().should.eql(weekLater.toDateString());
			});
		});

		describe(".toDate()", () => {
			it("should get the js datetime object", () => {
				dt = new DateTime(today);
				dt.toDate().should.eql(today);
			});
		});

		describe(".utc()", () => {
			it("should return the datetime in utc time");
		});
	});
});
