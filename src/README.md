Calculator CLI (src)

This folder contains a small Node.js CLI calculator that supports the four basic operations:
- addition (add, +)
- subtraction (sub, -)
- multiplication (mul, *, x)
- division (div, /)

Examples:
  node src/calculator.js add 2 3
  node src/calculator.js div 10 2

The CLI prints the numeric result to stdout and uses non-zero exit codes for errors (invalid input, division by zero).