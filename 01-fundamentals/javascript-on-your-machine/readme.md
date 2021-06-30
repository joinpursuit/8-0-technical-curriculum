# JavaScript on Your Machine

Up until this point, you've been running JavaScript code through online IDEs. While convenient, the majority of developers write code on their local machines in text editors like VSCode. However, in order to get into a good workflow, you'll need to be able to run code on your own computer.

Thankfully, running JavaScript on your machine is quite doable thanks to NodeJS. Created in 2009, NodeJS created waves in the JavaScript community. In this lesson, you'll learn how to use NodeJS to run JavaScript files on your machine as well as how to run a NodeJS REPL.

## Learning Objectives

By the end of this lesson you should be able to:

- Describe what NodeJS is and why it's important.
- Install NodeJS on your local machine through Homebrew.
- Run JavaScript files with the `node` command.
- Access command line arguments with the `node` command.
- Run JavaScript in the NodeJS REPL.

---

## What is NodeJS?

Recall that JavaScript is just text. In order to have that text take some kind of action, we have to have some kind of program that can interpret the text. For example, take a look at the following JavaScript code.

```js
console.log("🚀 3... 2... 1... Blast off!");
```

While that code might mean something to you, it doesn't naturally mean something to a computer. By running the code above through a JavaScript interpreter, the code will actually do something, such as print a statement to the console.

What you may not know is that JavaScript was originally intended to be used solely on the web. It's job was to help websites be more interactive by adding animations and effects based on user input. That meant it needed a browser, like Google Chrome, to be run.

Since its creation, JavaScript has grown as a language and has become much more popular. You can now use JavaScript to build all kinds of programs, not just animations on the web. A large part of that growth was due to the creation of NodeJS. Thanks to NodeJS, you were no longer limited to running JavaScript in the browser. You could run JavaScript without any connection to the internet at all.

There's much more to the story of NodeJS. NodeJS is incredibly versatile and comes with a lot of amazing features. For now, keep in mind that the purpose of NodeJS is to run JavaScript from your computer. And, without it, you would be stuck to running JavaScript on the web.

## Installing NodeJS

If you haven't already, you'll need to install the `node` command. You can do so by installing it with [Homebrew](https://brew.sh/).

```bash
brew install node
```

You can check that Node has been installed correctly by running the following command.

```bash
node -v
```

You should receive a version that is equal to or above `v16.0.0`.

## Running JavaScript files

Once you have `node` installed, running JavaScript files is pretty easy.

First, you'll need to create a JavaScript file. To do so, you'll create a file that has the `.js` extension.

```bash
touch example.js
```

Inside that file, write some JavaScript code.

```js
console.log("🌌 Space. The final frontier.");
```

Then, from the command line, use the `node` command, passing the path to the file as the argument.

```bash
node ./example.js
```

Your code will be run and any output will be displayed in your terminal window.

### Expected output

It's important to keep in mind that when running a file with the `node` command, the only thing that will be outputted to the terminal is code that is logged. For example, take a look at the following code.

```js
function waveHello() {
  return "👋 Hello!";
}

waveHello();
```

If you place the code above inside of a `.js` file and then run it with the `node` command, you will not see any output. That doesn't mean the code is not being run. The code _is being run_ but there is no output (i.e. nothing that is logged) to display. If you want to see the result of the code, you'll need to log it.

```js
const result = waveHello();
console.log(result);
```

## Accessing command line arguments

One benefit to running JavaScript from the command line is that you can get access to information about the machine that is running the code. For example, NodeJS gives you access to a lot of information about `node` and the machine running NodeJS through the `process` object.

```js
console.log(process);
```

If you were to run the above in a `.js` file with the `node` command, you would see a very dense object printed to your terminal, with a lot of keys and values about NodeJS and your machine.

```js
{
  version: 'v16.4.0',
  arch: 'x64',
  platform: 'darwin',
  release: {
    name: 'node',
    sourceUrl: 'https://nodejs.org/download/release/v16.4.0/node-v16.4.0.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v16.4.0/node-v16.4.0-headers.tar.gz'
  },
  // ...
}
```

The `process` object in its entirety is not incredibly useful for the kinds of projects you'll be building, but there are a few keys on the object that are pretty interesting. For example, the `argv` key represents all of the arguments passed in to the `node` command.

```js
console.log(process.argv);
// [
//   '/path/to/node',
//   '/path/to/your/example.js'
// ]
```

`process.argv` returns an array of strings. The first element of the array is the file path to the `node` program. The second argument is the file path to `.js` file that was run. And every element afterwards are arguments added after the file.

For example, imagine your `example.js` file contains the following code which accesses the third element of the `process.argv` array and passes it as an argument to the `waveHello()` function.

```js
function waveHello(name) {
  let result = "👋 Hello!";
  if (name) {
    `👋 Hello, ${name}!`;
  }
  return result;
}

const name = process.argv[2];
const result = waveHello(name);
console.log(result);
```

Next, take a look at the following command you could run on the command line.

```bash
node ./example.js Jamie
```

If you were to run the command above, the output would be:

```
👋 Hello, Jamie!
```

### Multiple words

On the command line, each argument is separated by a space. If you wanted to write a program that allowed you to add a phrase as an argument, you would need to wrap the phrase in double quotes.

```bash
node ./example.js "Jamie B."
```

### Different data types

Every value passed as an argument will be interpreted as a string. If you choose to pass in other data types, you will need to do extra work to evaluate them. For example, take a look at the command below.

```bash
node ./example.js 3 5 10
```

This would result in the following values for `process.argv`.

```
[
  "/path/to/node",
  "/path/to/your/example.js".
  "3",
  "5",
  "10"
]
```

## The NodeJS REPL

Using a REPL can be really helpful for just testing out your code. Thankfully, with the `node` command, you have access to a JavaScript REPL from the command line.

To open up the `REPL`, just type `node`. Your terminal prompt will change to look something like the following.

```
Welcome to Node.js v16.4.0.
Type ".help" for more information.
>
```

You can now type JavaScript and run it by pressing return.

```
Welcome to Node.js v16.4.0.
Type ".help" for more information.
> console.log("👀 JavaScript in the terminal!?");
👀 JavaScript in the terminal!?
undefined
>
```

In the code above, a `console.log()` statement is written and then the return key is pressed. That statement is then logged immediately afterwards. Finally, the return value of the statement (i.e. `undefined`) is shown.

Instead of logging, you can also just evaluate expressions.

```
> "⭐️" + " " + "Let's go!";
"⭐️ Let's go!"
```

### Running multiple lines

In general, the JavaScript REPL is best used for running short lines of code. However, you can write longer statements.

If you start a statement on one line that is incomplete and hit return, three dots will appear that shows the REPL is waiting for you to finish.

```
> if (emoji === "⭐️") {
... console.log("You're a star!");
... }
undefined
```

If you ever see the three dots unexpectedly, that likely means the syntax you previously wrote is somehow incorrect. You can exit out of the statement by pressing `Control` + `C`.

Keep in mind that if you start a long statement, you can't go back to previous lines. If you're testing out a number of lines of code, it's likely better to just create a new `.js` file.

### Exiting the REPL

To exit the REPL, you can either press `Control` + `D` or `Control` + `C` twice. Lastly, you can type `.exit`.

```
>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
```
