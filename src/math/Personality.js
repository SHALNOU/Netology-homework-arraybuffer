export default class Personality {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.distance = 1;
    this.stoneStatus = false;
  }

  set stoned(value) {
    this.stoneStatus = value;
  }

  get stoned() {
    return this.stoneStatus;
  }

  set attack(value) {
    this.attackedValue = value;
  }

  get attack() {
    const attack = this.attackedValue * (1 - (this.distance - 1) / 10);
    if (this.stoneStatus) {
      return attack - Math.log2(this.distance) * 5;
    }
    return attack;
  }
}
