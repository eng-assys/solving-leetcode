import { longestPalindrome } from './solution';

describe('20. Valid Parentheses', () => {

  test('should return 7 for string "abccccdd"', () => {
    const input = "abccccdd";
    expect(longestPalindrome(input)).toBe(7);
  });

  test('should return 1 for string "a"', () => {
    const input = "a";
    expect(longestPalindrome(input)).toBe(1);
  });
});