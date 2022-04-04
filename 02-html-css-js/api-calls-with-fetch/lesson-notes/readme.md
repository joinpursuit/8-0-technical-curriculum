# API Calls with Fetch

## Learning objectives

By the end of this lesson you should be able to:

- Use the `fetch()` API to make GET requests to a public JSON API.
- Use the data from an API call to build a web application, including event listeners.
- Gracefully handle errors by showing a response to the user.

---

## Setup

Begin by forking the following Repl.it.

- [Repl.it: PokeAPI](https://replit.com/@Pursuit/API-Calls-PokeAPI)

You will also want to review the following API. Don't worry, you don't need to know anything at all about Pokemon for this lesson.

- [Pokeapi.co](https://pokeapi.co/)

## Guiding questions

- What is a web API?

- What does it mean for a server to be a JSON web API?

- What does the `fetch()` function do?

- Take a look at the following code which makes use of the `fetch()` function. Describe each line of code as best as you can.

  ```js
  fetch(YOUR_URL)
    .then((response) => response.json())
    .then(console.log)
    .catch(console.log);
  ```

- Take a look at the front page of the PokeAPI. What URL should you use to request data for a pokemon with the name of "ditto"?

  Try typing that URL into your location bar. Do you receive any data back? Why or why not?

- In your repl, use _just_ the `fetch()` function to make a request to that same URL. What shows up in the console? Why? Was the API call made?

- In your repl, use the `fetch()` function _with `.then()` that converts the response to JSON._ What shows up in the console? Why? Was the API call made?

- In your repl, use the `fetch()` function with `.then()` that converts the response to JSON _and a `.then()` to log out the response._ What shows up in the console? Why? Was the API call made?

- You are now making requests to the PokeAPI! While this JSON API is pretty forgiving, in general you should be careful about making requests to APIs as many are rate-limited.

  What does it mean for an API to be rate-limited?

- Based on how your code is currently structured, when will you make a request to the API?

- The goal of today's lesson is going to be to use the existing form on the page to add a Pokemon's name and image to the page. Start by wrapping the call to the API inside of a function called `getPokemonByID()`.

  This function will take a number and make a request to the PokeAPI using that number. For example, if the number given is `35`, the request would include the path `pokemon/5`.

- Add an event listener to the form so that when it submits, the page does not refresh.

- Inside of the event listener, call your `getPokemonByID()` function. You may give it the value of `35`. At the moment, you should only see the data logged of the pokemon.

- Update your code so that `getPokemonByID()` uses the value entered into the form. After the form is submitted, clear the value inside of the input.

- Update your code so that when there is an error with your `fetch()` request, it shows that there is a problem to the user. You can use the following HTML structure to format your error, replacing `ERROR_MESSAGE` with the actual error message received.

  ```html
  <section class="error">
    <p>There was an error!</p>
    <p class="message">ERROR_MESSAGE</p>
  </section>
  ```

  - Where did you choose to put this code? Why?
  - Where did you choose to put the HTML you created? Why?

- Update your code so that when there is a successful result from your `fetch()` request, it displays an image of the pokemon, it's name, and its order. You can use the following HTML structure to format your error. Replace `SPRITE_IMAGE` with the URL of a sprite, `NAME` with the pokemon's name, and `ORDER` with the order of the pokemon.

  ```html
  <article>
    <img src="SPRITE_IMAGE" alt="NAME" />
    <h2>NAME (#ORDER)</h2>
  </article>
  ```

  - Where did you choose to put this code? Why?
  - Where did you choose to put the HTML you created? Why?

- Reflect on the code you've written so far. How could it be improved?

- Reflect on the user experience of your application so far. How could it be improved?

- What are some additional features you could add to this application?
