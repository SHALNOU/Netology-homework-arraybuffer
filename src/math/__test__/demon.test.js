import Demon from "../Demon";

test('test defold of demon', () => {

	const demon = new Demon('lizing', 'goo');
	demon.attack = 50;
	demon.distance = 2;
	demon.stoned = false;

	const result =
	{
		name: 'lizing',
		type: 'goo',
		distance: 2,
		stoneStatus: false,
		attackedValue: 50
	}


	expect(demon).toEqual(result)
})