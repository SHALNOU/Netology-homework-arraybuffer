import Mag from "../Mag";

test('should create Magician for type "Magician"', () => {
	const result = new Mag('Magician', 'mag');
	expect(result.name).toBe('Magician');
	expect(result.type).toBe('mag');
	expect(result.stoneStatus).toBe(false);
	expect(result.attackedValue).toBe(100);
	expect(result.distance).toBe(1);
});


test('calculate attack without stone', () => {
	const mag = new Mag('Magician', 'mag');
	mag.attackedValue = 80;
	mag.distance = 3;
	mag.stoneStatus = false;

	const expectedAttack = 80 * (1 - (3 - 1) / 10);

	expect(mag.attack).toBeCloseTo(expectedAttack);
});

test('calculate attack with stone', () => {
	const mag = new Mag('Magician', 'mag');
	mag.attackedValue = 80;
	mag.distance = 3;
	mag.stoneStatus = true;

	const expectedAttack = 80 * (1 - (3 - 1) / 10) - Math.log2(3) * 5;

	expect(mag.attack).toBeCloseTo(expectedAttack);
});


test('get stoned status', () => {
	const mag = new Mag('Magician', 'mag');
	mag.stoneStatus = true;

	expect(mag.stoned).toBe(true);

	mag.stoneStatus = false;

	expect(mag.stoned).toBe(false);
});