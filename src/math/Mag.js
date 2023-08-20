import Personality from './Personality';

export default class Mag extends Personality {
	constructor(name, type) {
		super(name, type);

		this.attack = 100;
		this.stoned = false;
	}
}

