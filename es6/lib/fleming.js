import moment from "moment";
import privateData from "incognito";

export default class DateTime {
	constructor(initialDate = new Date()) {
		const _ = privateData(this);
		_._mDateTime = moment(initialDate);
		Object.defineProperties(this, {
			"mDateTime": {
				enumerable: true,
				get: () => {
					return _._mDateTime;
				}
			}
		});
	}

	toDate() {
		return privateData(this)._mDateTime.toDate();
	}

	add(...args) {
		privateData(this)._mDateTime.add(...args);
	}

	compare(target) {
		//compare this date time with another one
		return privateData(this)._mDateTime.diff(target.mDateTime);
	}

	isAhead(target) {
		return (this.compare(target) >= 0);
	}
}
