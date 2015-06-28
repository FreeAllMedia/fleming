let moment = require("moment");

export default class DateTime {
	constructor(initialDate = new Date()) {
		Object.defineProperties(this, {
			"mDateTime": {
				enumerable: false,
				writable: true,
				value: moment(initialDate)
			}
		});
	}

	toDate() {
		return this.mDateTime.toDate();
	}

	add(...args) {
		this.mDateTime.add(...args);
	}
}
