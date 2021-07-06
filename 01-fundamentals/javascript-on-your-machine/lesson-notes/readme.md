# JavaScript on Your Machine

## Learning Objectives

By the end of this lesson you should be able to:

- Describe what NodeJS is and why it's important.
- Install NodeJS on your local machine through Homebrew.
- Run JavaScript files with the `node` command.
- Access command line arguments with the `node` command.
- Run JavaScript in the NodeJS REPL.

---

## Guiding Questions

- What is NodeJS?

- Why was NodeJS so influential on the JavaScript community?

- How can you check which version of `node` you have?

- Create a new `.js` file and put the following inside of it.

  ```js
  function addFruit(fruits, fruit) {
    fruits.push(fruit);
    return fruits;
  }

  const fruits = ["🍓", "🍐", "🍎"];
  addFruit(fruits, "🥝");
  ```

  How can you run this file from the command line?

- When you run this file, nothing is shown on the command line. How can you update the file so that it prints the response to your terminal window?

- Try adding the following line inside of your file. What gets logged out? What _data type_ is `process`?

  ```js
  console.log(process);
  ```

- Try adding the following inside of your file. What gets logged out? What _data type_ is `process.argv`?

  ```js
  console.log(process.argv);
  ```

- What will always be the first and second elements of `process.argv`?

- Update your `.js` file so that it contains the code below.

  ```js
  function addFruit(fruits, fruit) {
    fruits.push(fruit);
    return fruits;
  }

  const fruits = ["🍓", "🍐", "🍎"];
  const input = process.argv[2];
  if (input) {
    let result = addFruit(fruits, input);
    console.log(result);
  } else {
    console.log("No fruit added...");
  }
  ```

  How can you change what you run on the command line so that a new fruit is added to the array?

- After running the code and adding a fruit, your file will not change. This means your changes are not permanent. Why is this?

- How can you open the NodeJS REPL?

- How can you run code in the NodeJS REPL?

- How can you exit the NodeJS REPL?

- Is it possible to write a full function over multiple lines in the REPL? How?
