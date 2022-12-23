const { MarkovMachine } = require('./markov');

describe('testing makeChains', function() {
	beforeAll(function() {
		const testMarkov = new MarkovMachine('the cat in the hat is in the hat');
	});
	test('testing makeChains', function() {
		expect(testMarkov.chain['the']).toEqual([ 'cat', 'hat' ]);
	});
});
