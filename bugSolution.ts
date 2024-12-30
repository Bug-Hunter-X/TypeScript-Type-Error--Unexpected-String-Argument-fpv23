function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: any): number {
  if (typeof b !== 'number') {
    throw new Error('Argument b must be a number'); 
  }
  return a + b;
}

function addSafe2(a: number, b: any): number {
    return typeof b === 'number' ? a + b : NaN; //or handle the error differently
}

let result1 = addSafe(1, "2"); // Throws an error
let result2 = addSafe2(1, "2"); // Returns NaN
let result3 = add(1,2); //Correct usage