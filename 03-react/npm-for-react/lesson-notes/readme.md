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

## Guiding questions

- Take a look at the [NPM website](https://www.npmjs.com/). What is a package?

- What is NPM and how does it interact with packages?

- How can you create a new NPM project?

- What is the overall purpose of the `package.json` file?

- How do you run the `"test"` script that is provided by default when creating a new `package.json` file?

- Change the word `"test"` to `"example"`. How can you run that same script now?

- Change the value of the script to `"echo $USER"` then run that script. What changed and why?

- Describe what the following command will do:

  ```
  npx -y create-react-app my-first-react-project
  ```

- Before running the command above, make sure you are in a project folder that _is not_ a git repository.

  Run the command above and take a look at the output from it. After going into the new directory that has been created by the command, what could you run to start the development server?

- Start the development server. What happens? How can you stop the server?

- Open up the directory you created with your code editor. Find the `App.test.js` file. What is the meaning of the following line of code that can be found there? What line of code in the `App.js` file relates to this line of code?

  ```js
  import App from "./App";
  ```

- Take a look at the following two lines from the `App.js` file. Based on what you know from answering the question above, what do you think these two lines do?

  ```js
  import logo from "./logo.svg";
  import "./App.css";
  ```
