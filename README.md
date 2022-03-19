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

  > You can select **To check syntax, find problems and enforce code styles **(or any other)

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
