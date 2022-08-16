# Introduction To React

## Learning Objectives

- Understand what React is and what problem it solves
- Create an application that uses React to render its front end

## Getting Started

There are several ways to [create an application with React or to add React to a current project](https://reactjs.org/docs/getting-started.html). We'll use `Create-React-App`, which is a feature rich application that has the following features:

- Automatic browser reloading when you make a change and other pre-configurations that make using it very easy
- Helpful error messages
- File and folder structure that is easy to use and maintain
- Configured for easy deployment

To use Create-React-App to create a new app:

- In terminal, navigate to a convenient location on your computer in the
- `npx create-react-app@5.0 my-app`
  - **npx** allows you to download what you need to create a new create-react-app one time and then delete the unnecessary set-up files.
  - **create-react-app** allows you to start a new Create React App project
  - **@5.0** allows you to download version 5.0 of Create React App. This is useful for class. This will allow you, your instructor and the class notes to all have the same version to learn and study. If you don't include this, it will download the latest version, which may have some variations to what you see in class.
  - **my-app** this is the name of your project and file that will contain your Create React App. You can name it anything you want.

Inside this project you will see the following files

```
.
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src
```

> **Note:** If node modules are missing, use `npm install` to install the needed packages`

> Where will you build your application?

<details><summary>Answer</summary>

You will work inside the `src` folder.

You can also go into the `public` and change information in the `head` of the `index.html` file. For example, you can change the name of the app from `React App` to whatever you want.

</details>

To start your app:

```
npm start
```

Go to the **src/App.js** file.

What does each line of code do?

Remove all the **boilerplate** code and add your own code.

Try to:

- Add your own header
- Add your own image
- Add your own link
- Add your own CSS

## Creating Components

This app is very small. Production level apps are massive. One of the benefits of React is that it allows you to create small components. Each component is typically stored in its own file.

Inside of the **src** folder, add a new file called `Header.js`.

```js
// Header.js
function Header() {}
```

Add a return statement with parenthesis. Return statements can only return one line of code. The parenthesis allow you to space your HTML/JSX across multiple lines to make it easier to read and edit, but JavaScript will still read it as one line of code.

```js
// Header.js
function Header() {
    return ()
}
```

```js
// Header.js
function Header() {
  return (
    <header>
      <h1>My header</h1>
    </header>
  );
}
```

We want to use this code in `App.js`. To export this code we must do so explicitly:

```js
// Header.js
function Header() {
  return (
    <header>
      <h1>My header</h1>
    </header>
  );
}

export default Header;
```

The default keyword allows the ability to rename this component in `App.js`.

Return to `App.js` and import this component

```js
// App.js
import Header from "./Header";
```

Use this new custom component you've created:

```js
function App() {
  return (
    <Header />
    <div className="App">
    <h2>React is cool  </h2>
    </div>
  );
}
```

This will cause an error. JSX expressions can have only one parent element. Let's move your custom header inside the `div`.

```js
function App() {
  return (
    <div className="App">
      <Header />
      <h2>React is cool </h2>
    </div>
  );
}
```

Inside of the div is a property `className`. What does it do?

Why can't you use the `class` keyword instead. [Hint](https://www.w3schools.com/js/js_reserved.asp)
