# TypeScript Type Error: Unexpected String Argument

This repository demonstrates a subtle type error in TypeScript. The `add` function is explicitly typed to accept two numbers. However, it's called with a string, leading to a runtime error that might be difficult to debug without careful inspection of the types.

The `bug.ts` file shows the erroneous code, and `bugSolution.ts` provides a corrected version with additional type guards to prevent this type of error.