export {};

// EXAMPLE 1 - Merging Objects in TypeScript

const obj1 = { name: 'Bobby Hadz', age: 30 };
const obj2 = { country: 'Chile' };

// 👇️ const obj3: {country: string; name: string; age: number;}
const obj3 = { ...obj1, ...obj2 };

// 👇️ { name: 'Bobby Hadz', age: 30, country: 'Chile' }
console.log(obj3);

// ---------------------------------------------------

// // EXAMPLE 2 - Merging Objects in TypeScript with Object.assign()

// const obj1 = { name: 'Bobby Hadz', age: 30 };
// const obj2 = { country: 'Chile' };

// // 👇️ const obj3: {name: string; age: number} & {country: string}
// const obj3 = Object.assign({}, obj1, obj2);

// // 👇️ {name: 'Bobby Hadz', age: 30, country: 'Chile'}
// console.log(obj3);
