import { romanToInt } from './solution';

describe('13. Roman to Integer', () => {

  test('should return number 3 to string "III"', () => {
    const input = "III";
    expect(romanToInt(input)).toBe(3);
  });

  test('should return number 58 to string "LVIII"', () => {
    const input = "LVIII";
    expect(romanToInt(input)).toBe(58);
  });

  test('should return number 1994 to string "MCMXCIV"', () => {
    const input = "MCMXCIV";
    expect(romanToInt(input)).toBe(1994);
  });
});