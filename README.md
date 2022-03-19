# Typescript-Basics

# Getting Environmental Setup Ready

- Creating a repository
- Initializing the repository by

```
npx init
```

- After selecting all the Options
- You can use **npm** or **yarn** to install package

Official TypeScript Website [TypeScript](https://www.typescriptlang.org/download)

First Install Typescript as **dev** dependency by following commands

```
npm install typescript --save-dev
```

or

```
yarn add typescript --dev
```

## Initializing TypeScript by

```
npx tsc --init
```

You can make changes in **tsconfig.json** file or can leave it as default.

## **Optional** ESLint Setup

Official ESLint Website [ESLint](https://eslint.org/)

ESLint helps you find problems and fix them automatically. You can Customize it easily.

### Getting Started with ESLint

Getting Started with [ESLint](https://eslint.org/docs/user-guide/getting-started)

#### Installation

You can Install ESLint using npm or yarn

```
npm install eslint --save-dev
```

or

```
yarn add eslint --dev
```

#### Initialization

You can Initialize ESLint by

```
npx eslint --init
```

It will ask you couple of Question

- How would you like to use ESLint?

  > You can select To check syntax, find problems and enforce code styles (or any other)

- What type of modules does your project use?

  > You can select JavaScript modules

- Which framework does your project use?

  > React (As I'm going to use it for React)

- Does your project use TypeScript?

  > Yes

- Where does your code run?

  > In this case Browser

- How would you like to define a style for your project?

  > Use a popular style guide

- Which style guide do you want to follow?

  > You can choose any (I'm going to choose Airbnb)

- What format do you want your config file to be in?

  > JavaScript

- Would you like to install them now with npm?
  > Yes

It will add all the dependencies in **package.json** file under _devDependencies_

#### .eslinttrc.js

This file will include all the settings of your ESLint.
You can define Rules under the **rules** array

For Example

```
"quotes": ["error","double"]
```

It will basically enforce all String to use Double Quotes **""** instead of single Quotes

#### Fixing the Errors

You can fix the errors by simply typing the command

> npx eslint _filename and path_ --fix

For Example

```
npx eslint ./eslinttrc.js
```

# Compiling TypeScript Code into JS

You can compile TypeScript Code into JavaScript by simply typing the command

```
npx tsc **location**
```

For Example

```
npx tsc ./src/test.ts
```

It will create a test.js file

# Useful Resources For Learning TypeScript

- TypeScript for JavaScript Programmers

> Learn TypeScript in 5 Minutes[TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

- The TypeScript Handbook [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

# Data Types

## Basic Data Types

Some Basics Data Types are

- number
- string
- boolean
- null
- undefined
- any
- void

```
let a: number;
let b: boolean;
let c: string;
```

## Custom Data Types

### type

You can define Custom Data Type by using keyword **type**
For Example:

```
type User = {
  name: string;
  fatherName: string;
  age: number;
  isMale: boolean;
}
```

And You can assign it to like that

```
const user: User = {
  name: 'Ali',
  surName: 'IDK',
  age: 30,
  isAdmin: false,
};
```

> If you type some other type like for age you give a string it won't let you compile it and throw an error.
> Also if some property is missing it will throw an error as well.

### interface

Suppose we came across a situation where we want to have same properties as other types but some additional we can simply extend it
For Example:

```
interface UserWithPermissions extends User{
  permissions: string[]
}
```

and

```
const user2: UserWithPermissions = {
  name: 'Ali',
  surName: 'IDK',
  age: 30,
  isAdmin: false,
  permissions: ['manager', 'instructor'],
};
```

### Difference b/w Types and Interface?

- One major difference between type aliases vs interfaces are that interfaces are open and type aliases are closed.
- This means you can extend an interface by declaring it a second time.
- They both support extending other interfaces and types. Type aliases do this via intersection types, while interfaces have a keyword.

Difference [Types vs Interface](https://www.typescriptlang.org/play#example/types-vs-interfaces)
Another Resource [Types vs Interface](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220)

## Optional Parameter

You can create an optional parameter by simply applying _?_ at the end

> For Example,

```
interface OptionalUser {
  name: string;
  age: number;
  permissions?: string[];
}
```

# Functions

You can define a function like this

```
const sum = (a: number, b: number): number => a + b;
```

where a: **number** defines the type of the parameter a
and (a: number, b: number): **number** tells us about the return type of the function

> If we have more than one function with same types like

```
const mul = (a: number, b: number): number => a * b;
```

We can define a type for function as follow

```
type AirthmateticOperation = (a: number, b: number) => number;
```

And now can apply to any function without worrying about explicitly typing types
For Example:

```
const sum2: AirthmateticOperation = (a, b) => a + b;
```
