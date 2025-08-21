import { minWindow } from './solution'
import minSubstring = require('./data/min-substring');
import sString = require('./data/s-string');
import tString = require('./data/t-string');

describe('76. Minimum Window Substring - Heavy Test Case', () => {
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

  test('should return "" for s = "a", t = "aa"', () => {
    const s = "a";
    const t = "aa";
    expect(minWindow(s, t)).toBe("");
  });

  test('should return enormous minSubstring for enormous s and t', () => {
    expect(minWindow(sString.s, tString.t)).toBe(minSubstring.minSubstring);
  });
});