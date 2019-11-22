import { reject } from './reject';

describe('4 reject', () => {
  const even = x => x % 2 === 0;
  const isOdd = (n) => n % 2 !== 0;
  it('reduces an array to those not matching a filter', () => {
    expect(reject(even, [1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
  });

  it('returns an empty array if no element matches', () => {
    expect(reject(x => x < 100, [1, 9, 99])).toEqual([]);
  });

  it('returns an empty array if asked to filter an empty array', () => {
    expect(reject(x => x > 100, [])).toEqual([]);
  });

  it('returns an empty array if no element matches', () => {
    expect(reject(x => x < 100, [1, 9, 99])).toEqual([]);
  });

  it('returns an empty array if asked to filter an empty array', () => {
    expect(reject(x => x > 100, [])).toEqual([]);
  });
  it('returns an object to those not matching the condtion', () => {
    expect(reject(isOdd, {a: 1, b: 2, c: 3, d: 4})).toEqual({b: 2, d: 4});
  });
});
