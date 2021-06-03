import getScores from '../../js/Api/getScore.js';

require('jest-fetch-mock').enableMocks();

describe('testing getScores api endpoint', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns the users name and score as an array of object', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        result: [
          {
            name: 'Alien',
            score: 40,
          },
        ],
      }),
    );

    const res = await getScores();
    expect(res[0].name).toBe('Alien');
    expect(res[0].score).toBe(40);
  });
});