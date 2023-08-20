import Personality from './Personality.js';

export default class Demon extends Personality {
	constructor(name, type) {
		super(name, type);

		this.attack = 100;
		this.stoned = false;
	}
}


