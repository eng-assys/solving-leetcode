import { minWindow } from './solution';

describe('20. Valid Parentheses', () => {

  test('should return "BANC" for s = "ADOBECODEBANC", t = "ABC"', () => {
    const s = "ADOBECODEBANC";
    const t = "ABC";
    expect(minWindow(s, t)).toBe("BANC");
  });

  test('should return "a" for s = "a", t = "a"', () => {
    const s = "a";
    const t = "a";
    expect(minWindow(s, t)).toBe("a");
  });

  test('should return "BANC" for s = "a", t = "aa"', () => {
    const s = "a";
    const t = "aa";
    expect(minWindow(s, t)).toBe("");
  });
});