const user: (string | number | boolean)[] = ["at", 1, true];

// now i want that data to be in sequence
// tuples
let Tuser: [string, number, boolean];

Tuser = ["ali", 23, true];
console.log(Tuser[0].toLowerCase()); // ali
console.log(Tuser[1].toFixed(2)); // 23.00
console.log(Tuser[2].valueOf()); // true
export {};
