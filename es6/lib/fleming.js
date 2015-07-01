let moment = require("moment");

export default class DateTime {
	constructor(initialDate = new Date()) {
		Object.defineProperties(this, {
			"_mDateTime": {
				enumerable: false,
				writable: true,
				value: moment(initialDate)
			},
			"mDateTime": {
				enumerable: true,
				get: () => {
					return this._mDateTime;
				}
			}
		});
	}

	toDate() {
		return this._mDateTime.toDate();
	}

	add(...args) {
		this._mDateTime.add(...args);
	}

	compare(target) {
		//compare this date time with another one
		return this._mDateTime.diff(target.mDateTime);
	}

	isAhead(target) {
		return (this.compare(target) >= 0);
	}
}
