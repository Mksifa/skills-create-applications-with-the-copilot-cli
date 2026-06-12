#!/usr/bin/env node
/**
 * Calculator CLI
 *
 * Supported operations:
 * - addition (add, +)
 * - subtraction (sub, -)
 * - multiplication (mul, *, x)
 * - division (div, /)
 *
 * Usage examples:
 *   node src/calculator.js add 2 3    # outputs 5
 *   node src/calculator.js sub 5 2    # outputs 3
 *   node src/calculator.js mul 4 3    # outputs 12
 *   node src/calculator.js div 10 2   # outputs 5
 *
 * Behavior:
 * - Accepts two numeric arguments (supports floats).
 * - Prints a clear error and exits with non-zero status on invalid input or division by zero.
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

function printUsage() {
  console.error('Usage: node src/calculator.js <add|sub|mul|div|+|-|*|/> <num1> <num2>');
}

if (require.main === module) {
  const [, , op, aStr, bStr] = process.argv;

  if (!op || aStr === undefined || bStr === undefined) {
    printUsage();
    process.exit(1);
  }

  const a = Number(aStr);
  const b = Number(bStr);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    console.error('Invalid numeric input. Provide two numbers (integers or floats).');
    process.exit(2);
  }

  try {
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

module.exports = { add, sub, mul, div };
