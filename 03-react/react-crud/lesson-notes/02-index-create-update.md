# React CRUD

## Learning objectives

By the end of this lesson you should be able to:

- Use a form to create a new show.
- Use a form to edit a show

---

## Getting started

Start by forking and cloning the following repository.

TODO CREATE A VERSION AT THIS POINT

- [React CRUD Lab](https://github.com/joinpursuit/8-0-react-crud-lab)

Follow the instructions in that repository to get the application up and working.

> **Note:** You will also have to start the server on your computer. This will mimic a third-party-api, but instead of the resource being somewhere on the internet, it will be on your machine.

## Guiding questions and tasks

First, once your application is up and running, review the code that exists in the React CRUD Lab repository. Answer the following questions.

### New Page

The goal will be to build out the page so that it looks like the image below.

![Television show index page](../assets/lesson-notes/shows-index.png)

There are two components highlighted in the image above:

1. This will be the `ShowsIndex` component.
2. This will be a `ShowsListing` component.

#### Handling an error

Before building the page, it's a good idea to handle any potential errors that may arise. For example, what should the user be shown if the API cannot be reached?

In this case, show them a very generic error message, like the image below.

![Error displaying on the television shows index page.](../assets/lesson-notes/shows-index-error.png)

To do this, you will want to do the following:

1. Build an `ErrorMessage` component. Use the HTML below for the component. Where do you think this component should be loaded?

   ```html
   <section className="error">
     <p>Something went wrong! Please try again later.</p>
   </section>
   ```

1. Create a `ErrorMessage.css` file and include the following CSS. Don't forget to import this to the `ErrorMessage` component.

   ```css
   .error {
     border: 1px solid var(--error);
     margin: 25px;
     padding: 25px;
   }
   .error p {
     color: var(--error);
     font-family: var(--primary-font);
     margin: 25px;
     text-align: center;
   }
   ```

1. Add state to the correct component using `useState()` with the variable `loadingError` (boolean) and declare a function to set this state.
1. Conditionally render the error message. It should render if `state.loadingError` is `true` _or_ if there are no shows retrieved. When would `state.loadingError` be set to `true`? For now, confirm this component renders as expected by changing the initial state value for `loadingError`.

#### ShowsIndex

Use the HTML structure below to build the `ShowsIndex` page. The comment is where the `ShowsListing` components will go.

```jsx
// ShowIndex.js
<section className="shows-index-wrapper">
  <h2>All Shows</h2>
  <section className="shows-index">
    {/* <!-- ShowListing components --> */}
  </section>
</section>
```

#### Shows index fetch data

Get the environmental variable from `.env`

```js
const URL = process.env.REACT_APP_API_BASE_URL;
```

Add state to the `ShowIndex ` component to a variable named `shows`. Shows should have a default value of an empty array `[]`. Add a function called `setShows` that will update the value of `shows`.

```js
function getAllShows() {
  fetch(`${URL}/shows`)
    .then((response) => response.json())
    .then((response) => {
      setShows(response);
      setLoadingError(false);
    })
    .catch((error) => {
      console.error(error);
      setLoadingError(true);
    });
}
```

Call `getAllShows()` one time, on page load.

```js
useEffect(() => {
  getAllShows();
}, []);
```

It takes a very long time to load and there is too much data to develop with (slow loads, too much to look through). Let's just retrieve the first 20 for now. Inside the `getAllShows()` function update the url to:

```js
fetch(`${URL}/shows?_page=1`);
```

Later, you can change it back to the original URL, or as a challenge, you can make `previous` and `next` buttons that let you look at 20 entries at a time.

#### ShowListing

You will now need to create the `ShowListing` component. This component will appear multiple times depending on the number of shows retrieved.

To complete this, you will want to do the following:

1. Create a `ShowListing` component. Use the HTML below for the component and leave the text as is for now. Where do you think this component should live?

   ```jsx
   // ShowListing
   <article className="show">
     <h3 class="title">
       <a href="/shows/showId">Title property</a>
     </h3>
     <p className="description">Description property</p>
     <aside className="details">
       <p>
         <span>Listed Categories:</span> ListedIn property
       </p>
       <p>
         <span>Duration:</span> Duration property
       </p>
     </aside>
   </article>
   ```

1. Import the `ShowListing` component into the `ShowsIndex` component. Get the `ShowListing` component to map over the `shows` array to display the component the same number of times as there are show objects.

   - This component should only be displayed if there are no errors.
   - Remember to use the `key` property.

1. Pass props into the `ShowListing` component from the `ShowsIndex` component. Replace the dummy text (e.g. "Title property") with the appropriate values. At the end of this step, you should have a long list of unique television shows.

Here is an example show object:

```js
const obj = {
  id: "ZxJzBhp",
  type: "TV Show",
  title: "Star Trek: The Original Series",
  country: "United States",
  dateAdded: "",
  description: "",
  duration: "",
  listedIn: "",
  rating: "",
  releaseYear: "",
};
```

### Show page

Next, you will need to build a page that display one television show. The goal will be to build out the page so that it looks like the image below. Usually, the show view contains more data than the index view (more images, longer descriptions, etc.).

![Television show show page](../assets/lesson-notes/shows-show.png)

This page will just be a single component, called `Show`. This represents the individual television show being viewed.

#### Routing

First, you should set up routing. The goal is to have it so that you are able to go to a page at the following path:

```
/shows/S86MJ1e
```

`S86MJ1e` represents the ID of the show. When a user goes to the above path, they will be shown information about that show.

You'll need the id number in the URL to make a fetch request for the specific show. You can use the React Router method

By the end of these steps, you should have something that looks like the following. Take note of the URL.

![A first iteration of the television show show page.](../assets/lesson-notes/shows-show-starter.png)

Finally, you will need to set up links to correctly go to the page. To do so:

1. Return to your `ShowListing` component and update the link so that it uses the `Link` component.

1. For the `to` property, you will need to dynamically build a string that will generate paths like `/shows/S86MJ1e`. How can you do so using string interpolation?

Now, when you click on a show title, you should be brought to your temporary show "page".

#### Dynamically setting the content

Then, update your `Show` component to include the following HTML. Leave the hardcoded values as is for the moment.

```jsx
// Show.js
<section class="shows-show-wrapper">
  <h2>REPLACE_WITH_TITLE</h2>
  <section class="shows-show">
    <aside>
      <p>
        <span>Duration:</span> REPLACE_WITH_DURATION
      </p>
      <p>
        <span>Listed Categories:</span> REPLACE_WITH_LISTED_CATEGORIES
      </p>
      <p>
        <span>Country:</span> REPLACE_WITH_COUNTRY
      </p>
      <p>
        <span>Rating:</span> REPLACE_WITH_RATING
      </p>
      <p>
        <span>Date Added:</span> REPLACE_WITH_DATE_ADDED
      </p>
    </aside>
    <article>
      <p>REPLACE_WITH_DESCRIPTION</p>
    </article>
    <aside>
      <button class="delete">Remove show</button>
    </aside>
  </section>
</section>
```

Next, you'll need to think about how to get the specific television show to appear on the show page. Consider the information available to you at this moment:

- The `ShowsIndex` component contains a `shows` property that contains all shows.
- The URL for this page contains the ID of the television show.

With these two pieces of information, it will be possible to access the specific show by page, and display that information.

Start by updating `App.js` to have the following route:

```html
<Route path="/shows/:id" element="{<Show" />} />
```

Think back to what you read early about the `path="/shows/:id"` key-value pair. The `:id` will act as a variable. To get access to this variable, you will need to import the method `useParams()` from React Router to gain access to this value.

```js
// Show.js
import { useParams } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";
import "./Show.css";
const URL = process.env.REACT_APP_API_BASE_URL;

// inside the function
const { id } = useParams();
const [loadingError, setLoadingError] = useState(false);
```

Add a function with a fetch request:

```js
function getShow() {
  fetch(`${URL}/shows/${id}`)
    .then((response) => response.json())
    .then((response) => {
      setShow(response);
      if (Object.keys(response).length === 0) {
        setLoadingError(true);
      } else {
        setLoadingError(false);
      }
    })
    .catch((error) => {
      console.error(error);
      setLoadingError(true);
    });
}
```

Add `useEffect()` to call this function when the Show component mounts into the DOM.

```js
useEffect(() => {
  getShow();
}, []);
```

Use the knowledge you gained from creating the above functionality:

1. Find the specific show based on the ID in the URL.

1. If no show is found, return the `ErrorMessage` component. You can test that this works by entering in a nonsense ID into the URL. No content but the navigation and footer should show up.

1. If a show _is found_, dynamically show the data. Replace the dummy text in the `Show` component with data from the real show.

- Additionally, you should only conditionally show one of the paragraph tags if the value for that property is not empty.

Now you should be able to click on any show and all of the data for that show will be displayed.

#### Destroying a show

It is now time to implement your first action, delete. To do so, you will need to do the following:

1. You will need to create a function that sends a request to the API to destroy the show with the selected ID.

1. You will need to create a method in `ShowIndex` that will use the function you just created and, when the request is complete, update the `shows` key of state to no longer have the deleted show.

1. You will need to pass down that method to the `Show` component and use it inside of an event handler.

1. Finally, you will need to use the [`history`](https://reactrouter.com/web/api/history) object to `.push()` the user to a new page, after the request has finished.

##### The DELETE request

Add the following to the `src/components/Show.js` file. This function will make a `DELETE` request to the API, requesting that the API delete the show with the given ID.

```js
function destroyShow(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      setLoadingError(true);
    });
}
```

Add this to the remove button with a click handler.

```js
<button className="delete" onClick={() => destroyShow(show.id)}>
  Remove show
</button>
```

Nothing appears to happen. Go back to the main page. Is the show still there? If it is, click on it. Do you get an error on the show page now?

- Check the API you have running. Did you see a line that looks similar to this?

  ```
  DELETE /api/shows/V9Ftowb 200 50.942 ms - 2
  ```

For a better, UI experience, you want to, after a successful deletion, navigate back to the shows index.

##### Redirecting after a successful deletion

The last step to complete is to redirect the user to a new page once the show has been deleted. Leaving them on the page of the deleted television show doesn't make much sense.

To do so, you can make use of the [`useNavigate`](https://reactrouter.com/web/api/history) object. This object allows you to manipulate the history of the page (e.g. the forward and back buttons of your browser) while remaining hooked in to React Router.

To do this, complete the following steps.

Add `useNavigate` method:

```js
// Show.js
import { useParams, useNavigate } from "react-router-dom";

// Inside the function
let navigate = useNavigate();
```

```js
// inside the successful `.then()` of the delete method
return fetch(`${URL}/shows/${id}`, options).then((response) => {
  navigate("/");
  return response.json();
});
```

### Recap

You've completed a lot of work in this lesson. To quickly recap, you have:

- Created an Index page for television shows.
- Created dynamic values for the `Link` element's `to` property using string interpolation.
- Created a Show page for television shows.
- On clicking a button, sent a DELETE request to the API in order to destroy a specific television show.
- Redirected a user through the `useNavigate` method.

While there have been a few new tools you've learned, try find where the code is similar to your previous code and that you are using the fundamental building blocks in new combinations more than you are learning new things.

### Next steps

To practice what you've learned, complete the same functionality for the `/movies` route. In general, everything should be the same except replacing the word "shows" or "show" with "movies" or "movie".

However, do not simply copy and paste. If you do so it is unlikely you will learn much of anything. Go through the steps above again, frequently thinking of _why_ you need to take certain steps and attempting to reproduce the next steps on your own.
