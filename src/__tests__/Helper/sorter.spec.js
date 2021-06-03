import sorter from '../../js/Helper/sorter.js';

const data = [
  {
    user: 'Player 1',
    score: 10,
  },
  {
    user: 'Player 2',
    score: 20,
  },
];

describe('should short the scores in descending order', () => {
  const sorted = sorter(data);
  test('Name of the player with highest score should come first', () => {
    expect(sorted[0].user).toEqual('Player 2');
  });

  test('Score of the player with highest score should come first', () => {
    expect(sorted[0].score).toEqual(20);
  });

  test('Name of the player with other than high score should NOT come first', () => {
    expect(sorted[0].user).not.toEqual('Player 1');
  });

  test('Score of the player with other then highest score should NOT come first', () => {
    expect(sorted[0].score).not.toEqual(10);
  });
});
