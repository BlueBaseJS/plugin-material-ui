import { noop, or } from '../index';

describe('helpers', () => {
	test('noop', async () => {
		expect(noop()).toBe(null);
	});

	test('or', async () => {
		expect(or(true, 1, 2)).toBe(1);
		expect(or(false, 1, 2)).toBe(2);
	});
});
