const { add, sub, mul, div, modulo, power, squareRoot } = require('../calculator');

describe('Calculator functions', () => {
  describe('Addition', () => {
    test('adds integers 2 + 3 => 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds floats 2.5 + 3.1 => 5.6', () => {
      expect(add(2.5, 3.1)).toBeCloseTo(5.6);
    });

    test('adds negatives -2 + 3 => 1', () => {
      expect(add(-2, 3)).toBe(1);
    });
  });

  describe('Subtraction', () => {
    test('subtracts integers 10 - 4 => 6', () => {
      expect(sub(10, 4)).toBe(6);
    });

    test('subtracts floats 5.5 - 2.2 => 3.3', () => {
      expect(sub(5.5, 2.2)).toBeCloseTo(3.3);
    });

    test('subtracts negatives 2 - (-3) => 5', () => {
      expect(sub(2, -3)).toBe(5);
    });
  });

  describe('Multiplication', () => {
    test('multiplies integers 45 * 2 => 90', () => {
      expect(mul(45, 2)).toBe(90);
    });

    test('multiplies floats 2.5 * 4 => 10', () => {
      expect(mul(2.5, 4)).toBeCloseTo(10);
    });

    test('multiplies by zero 123 * 0 => 0', () => {
      expect(mul(123, 0)).toBe(0);
    });
  });

  describe('Division', () => {
    test('divides integers 20 / 5 => 4', () => {
      expect(div(20, 5)).toBe(4);
    });

    test('divides floats 5.5 / 2 => 2.75', () => {
      expect(div(5.5, 2)).toBeCloseTo(2.75);
    });

    test('division by zero throws', () => {
      expect(() => div(1, 0)).toThrow('Division by zero');
    });
  });

  describe('Extended operations', () => {
    test('modulo 5 % 2 => 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('power 2 ^ 3 => 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('power with negative exponent 2 ^ -2 => 0.25', () => {
      expect(power(2, -2)).toBeCloseTo(0.25);
    });

    test('square root of 16 => 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('square root of negative number throws', () => {
      expect(() => squareRoot(-9)).toThrow('Cannot compute square root of negative number');
    });
  });
});
