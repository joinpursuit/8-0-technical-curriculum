# NPM for React

Node package manager, or NPM, is a powerful tool that makes it possible to access and share open-source code. Through NPM, it is possible to use free packages created by developers across the world that can improve your application. For example, React is available for download via NPM.

In this lesson, you'll learn how to create an NPM project and learn more about the `package.json` file. You'll also learn specific tools for working with React.

## Learning objectives

By the end of this lesson you should be able to:

- Create a new NPM project with `npm init`.
- Describe the purpose of the `package.json` file and modify it.
- Create scripts via the `package.json` file.
- Use `npx` to run the `create-react-app` package.
- Use the `export`, `import`, and `default` keywords to connect multiple files.

---

## What is NPM?

NPM is a package manager. A package is code that can be "packaged up" and reused in other applications. For example, testing libraries like Jest and Cypress are packages. NPM manages the downloading and use of these packages, placing downloaded packages into the `node_modules/` directory. NPM also makes use of a `package.json` file which records information about your project and what packages you have installed.

### Creating an NPM project

To create an NPM project, you can run the `npm init` command. Running this command will "initialize" an NPM project by beginning a prompt that will help in creating a `package.json` file.

![Image showing the `npm init` prompt getting started.](./assets/npm-init.png)

You are welcome to fill this out each time, however you can also run `npm init -y` to receive the default values. This will quickly create a new `package.json` file.

### package.json

After creating a `package.json` file, it will look something like the following. Remember that this is JSON, not JavaScript, and therefore it has some slightly different requirements.

```json
{
  "name": "example-npm-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

As you can see, the JSON file looks to contain an object with a variety of key-value pairs. Many of these pairs are self-explanatory. For example, the `"name"` key points to a value that represents the name of your project.

You can read more details about these keys on the NPM website.

- [npm Docs: package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)

### package-lock.json

When packages are installed, you will see an accompanying file to the `package.json` file: the `package-lock.json` file. This file helps keep track of the specific versions of different packages that are installed.

You should never need to manually update this file. You should always commit this file.

### Scripts

In this course, you will often leave the `package.json` as is. However, you may find yourself manually updating the `"scripts"` key. This key has a value which is an object, which contains a number of other keys. These keys are scripts that can be run from the command line via the following format:

```
npm run <SCRIPT-NAME>
```

For example, the default script has a name of `"test"`.

```json
{
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

It can be run from the command line with `npm run test`. To run this command, you must be in the directory where the `package.json` file is located.

Whatever is the value for that key (i.e. `"test"`) is the _command_ that will be run on the command line. For example, running `npm run test` will run the command set as the value.

![Image showing the default `test` script being run.](./assets/default-test-script.png)

As you can see, the string specified in the script (i.e. `Error: no test specified`) is "echoed" to the screen. The `exit` command stops whatever is running.

#### Default script names

Some script names are so commonly used that you can omit the `run` part of the command. For example, `test` and `start` are common to many NPM packages and therefore they can be shortened.

```
npm start
npm test
```

## What is the npx command?

While `npm` is designed to be used for local projects, it can also install packages globally. This means that certain commands or tools would become available to your entire operating system.

However, some packages you may just need to run every once in awhile and therefore don't want to install globally. The `npx` command allows you to do this.

For example, the [cowsay](https://www.npmjs.com/package/cowsay) package is a silly package that will print out an ASCII art image of a cow saying something. You can run it using `npx -y` and then using the command as described.

![Image of `npx` being used to run the `cowsay` package.](./assets/cowsay.png)

This will temporarily install the package and run the command.

While `cowsay` is neat, `npx` is really useful for project generators like `create-react-app`.

### create-react-app

The `create-react-app` package performs a number of functions that will set you up to start building your own React application. This package will:

1. Create a new folder with a name you give it.
1. Setup the folder as an NPM project and install relevant packages.
1. Create a number of default files so that you can run a React application right away.

This means that, when you run the `create-react-app` command, you will want to be in the _parent_ directory of where you want your React project to live.

The following command will create a new React application with the `create-react-app` package. Replace `PROJECT-NAME` with the name of the folder you want the package to create.

```
npx -y create-react-app PROJECT-NAME
```

## Export, import, and default

In a later lesson you will learn more about what is created with the `create-react-app` package. However, before getting into that, it's important to identify how complex front end projects, like projects that make use of React, connect their files together.

When working in a project created with `create-react-app`, you have the ability to `export` values from that file which can then be imported elsewhere. For example, imagine you have two files, `people.js` and `sayHello.js`.

```js
// people.js
const people = [
  { id: 1, first: "Morgan", last: "Meyer" },
  { id: 2, first: "Lidia", last: "Cardenal" },
];
```

```js
// sayHello.js
function sayHello(person) {
  console.log(`Hello, ${person.first}!`);
}
```

Each of these files holds specific information or functionality. To access this data from other files, you will need to somehow `export` the values you wish to have accessible.

For example, in the `people.js` file, you could export the array like so.

```js
// people.js
const people = [
  { id: 1, first: "Morgan", last: "Meyer" },
  { id: 2, first: "Lidia", last: "Cardenal" },
];

export people;
```

In another file, you could then import this data by doing the following.

```js
// run.js
import { people } from "./people.js";
```

Notice that the variable name that is exported, `people`, is what is used when importing. The object (i.e. `{}`) syntax is destructuring; each exported value gets placed into an object which can then be imported elsewhere.

It's possible to avoid using the object destructuring syntax by including the word `default`.

```js
// sayHello.js
function sayHello(person) {
  console.log(`Hello, ${person.first}!`);
}

export default sayHello;
```

By adding the `default` keyword, instead of placing exports inside of an object, whatever is exported as the default is what will be imported.

```js
// run.js
import { people } from "./people.js";
import sayHello from "./sayHello.js";
```

In the case above, the function is exported as the `default` value from `sayHello.js`. Then, when importing, instead of destructuring to access the function, you just get the function.

After importing values appropriately, those values can then be used in whatever file you like.

```js
// run.js
import { people } from "./people.js";
import sayHello from "./sayHello.js";

people.forEach(sayHello);
//> Hello, Morgan!
//> Hello, Lidia!
```
