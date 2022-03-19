// basic data types

let a: number;
let b: boolean;
let c: string;

// custom data types
type User = {
  name: string;
  surName: string;
  age: number;
  isAdmin: boolean;
};

const user: User = {
  name: 'Ali',
  surName: 'IDK',
  age: 30,
  isAdmin: false,
};

// interface
interface UserWithPermissions extends User {
  permissions: string[];
}

const user2: UserWithPermissions = {
  name: 'Ali',
  surName: 'IDK',
  age: 30,
  isAdmin: false,
  permissions: ['manager', 'instructor'],
};

// optional properties
interface OptionalUser {
  name: string;
  age: number;
  permissions?: string[];
}

// functions
const sum = (a: number, b: number): number => a + b;

const mul = (a: number, b: number): number => a * b;

// if our functions have same signature we can make a type
type AirthmateticOperation = (a: number, b: number) => number;

// then remove all the types from the function
const sum2: AirthmateticOperation = (a, b) => a + b;
