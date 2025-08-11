import { isValid } from './solution';

describe('20. Valid Parentheses', () => {

  test('should return true for a simple valid parentheses string "()"', () => {
    const input = "()";
    expect(isValid(input)).toBe(true);
  });

  test('should return true for a string with multiple valid parentheses types "()[]{}"', () => {
    const input = "()[]{}";
    expect(isValid(input)).toBe(true);
  });

  test('should return false for an out-of-order parentheses string "(]"', () => {
    const input = "(]";
    expect(isValid(input)).toBe(false);
  });

  test('should return true for a string with valid nested parentheses "([])"', () => {
    const input = "([])";
    expect(isValid(input)).toBe(true);
  });

  test('should return false for a string with invalid nested parentheses "([)]"', () => {
    const input = "([)]";
    expect(isValid(input)).toBe(false);
  });
});