import { lengthOfLongestSubstring } from './solution';

describe('3. Longest Substring Without Repeating Characters', () => {

  test('should return 3 to string "abcabcbb"', () => {
    const input = "abcabcbb";
    expect(lengthOfLongestSubstring(input)).toBe(3);
  });

  test('should return 1 to string "bbbbb"', () => {
    const input = "bbbbb";
    expect(lengthOfLongestSubstring(input)).toBe(1);
  });

  test('should return 3 to string "pwwkew"', () => {
    const input = "pwwkew";
    expect(lengthOfLongestSubstring(input)).toBe(3);
  });
});