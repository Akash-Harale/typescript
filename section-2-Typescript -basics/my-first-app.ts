// lecture no. 10

let userName: string = "Max"; // this is also correct but no need to give type explicitly.
// # we can explicitly decide the type of a variable but here
//   no need of giving type explicityly because typescript gives the type
//   implicityly as we give the value to a variable.

// # more correct method :
// # let userName="Max"

// lecture Node. 11

let userAge: number = 24; // this is correct but no need to give type explicitly.
// more correct --> let userAge=24;

// Boolean type
let isValid = true; // this is of boolean type

//lecture no. 13
// Union types (Alternative Types)
let userId: string | number = "abcd1";
userId = 77;
