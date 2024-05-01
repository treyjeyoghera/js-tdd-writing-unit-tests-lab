
// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome function', () => {
  test('returns true for palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('Racecar')).toBe(true);
  });

  test('returns false for non-palindromes', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('returns false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('throws error for input with non-alphabetic characters', () => {
    expect(() => isPalindrome('12321')).toThrow();
  });

  test('throws error for non-string input', () => {
    expect(() => isPalindrome(12321)).toThrow();
  });
});

