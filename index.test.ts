import solution from '.';

describe(solution, () => {
  it('should return the sum', () => {
    expect(solution([2, 7, 4, 1, 8, 1])).toBe(23);
  });
});