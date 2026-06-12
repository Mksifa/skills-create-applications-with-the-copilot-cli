#!/usr/bin/env node
/**
 * Calculator CLI
 *
 * Supported operations:
 * - addition (add, +)
 * - subtraction (sub, -)
 * - multiplication (mul, *, x)
 * - division (div, /)
 * - modulo (mod, %)
 * - exponentiation / power (pow, **, ^)
 * - square root (sqrt)
 *
 * Usage examples:
 *   node src/calculator.js add 2 3    # outputs 5
 *   node src/calculator.js sub 5 2    # outputs 3
 *   node src/calculator.js mul 4 3    # outputs 12
 *   node src/calculator.js div 10 2   # outputs 5
 *   node src/calculator.js mod 10 3   # outputs 1
 *   node src/calculator.js pow 2 8    # outputs 256
 *   node src/calculator.js sqrt 9     # outputs 3
 *
 * Behavior:
 * - Accepts numeric arguments (supports floats).
 * - sqrt accepts a single numeric argument and errors on negative input.
 * - Prints a clear error and exits with non-zero status on invalid input or division/modulo by zero.
 */

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot compute square root of negative number');
  }
  return Math.sqrt(n);
}

function printUsage() {
  console.error('Usage: node src/calculator.js <operation> <num1> [<num2>]');
  console.error('Operations: add, sub, mul, div, mod, pow, sqrt (also accept + - * / % ^ ** x)');
}

if (require.main === module) {
  const [, , op, aStr, bStr] = process.argv;

  if (!op) {
    printUsage();
    process.exit(1);
  }

  try {
    // sqrt uses a single argument, others use two
    if (op === 'sqrt') {
      if (aStr === undefined) {
        printUsage();
        process.exit(1);
      }
      const n = Number(aStr);
      if (!Number.isFinite(n)) {
        console.error('Invalid numeric input. Provide a number (integer or float).');
        process.exit(2);
      }
      const result = squareRoot(n);
      console.log(result);
      process.exit(0);
    }

    // For operations that require two arguments
    if (aStr === undefined || bStr === undefined) {
      printUsage();
      process.exit(1);
    }

    const a = Number(aStr);
    const b = Number(bStr);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
      console.error('Invalid numeric input. Provide two numbers (integers or floats).');
      process.exit(2);
    }

    let result;
    switch (op) {
      case 'add':
      case '+':
        result = add(a, b);
        break;
      case 'sub':
      case '-':
        result = sub(a, b);
        break;
      case 'mul':
      case '*':
      case 'x':
      case 'X':
        result = mul(a, b);
        break;
      case 'div':
      case '/':
        result = div(a, b);
        break;
      case 'mod':
      case '%':
        result = modulo(a, b);
        break;
      case 'pow':
      case '**':
      case '^':
        result = power(a, b);
        break;
      default:
        console.error('Unknown operation:', op);
        printUsage();
        process.exit(1);
    }

    console.log(result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(3);
  }
}

module.exports = { add, sub, mul, div, modulo, power, squareRoot };
