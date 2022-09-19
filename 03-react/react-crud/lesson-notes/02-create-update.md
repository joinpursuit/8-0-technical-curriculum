# React CRUD

## Learning objectives

By the end of this lesson, you should be able to:

- Use a form to create a new show.
- Use a form to edit a show.

---

## Getting started

Start by returning to your previous code. If you need to start fresh with the completed code from previous lessons:

- [React CRUD Lab with index, show and delete completed](https://github.com/joinpursuit/8-0-react-crud-lab/tree/index-show-delete)

Follow the instructions in that repository to get the application up and running.

> **Note:** You will also have to start the server on your computer. This will mimic a third-party API, but instead of the resource being somewhere on the internet, it will be on your machine.

### New Page

The goal will be to build out the form's functionality so you can create a new show.

Start in the `src/api/fetch.js` file.

The request to create will be a `POST` request. Additionally, the user has inputted some data into the form. The data from the form must be transformed from an object into JSON. Then this data will be passed in through the `body` key in the `options` object. Finally, you must select the kind of content you are sending to the API. In this case, it is `application/json` (must be written exactly like this).

```js
// src/api/fetch.js
// Create
export function createShow(show) {
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/`, options).then((response) => {
    return response.json();
  });
}
```

Go to the `src/components/shows/ShowsNewForm.js` file.

Import `createShow()`

```js
// src/components/shows/ShowsNewForm.js
import { createShow } from "../../api/fetch";
```

When the user has filled out the form, on successful creation, you can navigate the user back to the home page, the index page, stay on the form page or navigate them to the new show show view. There is no correct answer. It depends on the goal of user interaction. In this case, seeing the show view of the newly created show will help the user confirm they have successfully created the show.

Import `useNavigate()` from React Router.

```js
import { useNavigate } from "react-router-dom";
```

Configure `useNavigate()` inside the functional component.

```js
let navigate = useNavigate();
```

Inside of the `handleSubmit()` function:

```js
function handleSubmit(event) {
  event.preventDefault();
  createShow(show)
    .then((response) => {
      navigate(`/shows/${response.id}`);
    })
    .catch((error) => {
      console.error(error);
    });
}
```

Test it! Create a new show.

- Make sure all the fields are filled out as expected.
- Make sure it appears on the index page.
- Make sure you can delete it.
- Make sure the views update in the browser as expected (don't require a page reload or fiddling with the forward and back buttons).

Are there any other things you should test to make sure it works as expected?

### Edit Page

You will notice that the `ShowsEditForm` is very similar to the `ShowsNewForm`. One of the main features of React is reusable components, so it would be nice to reuse the form for both create and update. However, this would require setting up some extra complexity. First, always build the simple, functional version, then if you have time and ability, work on improving the code. Trying to create complex solutions right away can be overwhelming, time-consuming, and can block you from achieving your goals. It's ok to start simple.

Start in the `src/api/fetch.js` file.

The request to create will be a `PUT` request.

```js
// src/api/fetch.js
// Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/${id}`, options).then((response) => {
    return response.json();
  });
}
```

Go to the `src/components/shows/ShowsEditForm.js` file.

Import `updateShow()`:

```js
// src/components/shows/ShowsEditForm.js
import { updateShow } from "../../api/fetch";
```

Import `useNavigate()` from React Router and`useParams()`.

```js
import { useNavigate, useParams } from "react-router-dom";
```

Configure `useNavigate()` and `useParams()` inside the functional component.

```js
let navigate = useNavigate();
const { id } = useParams();
```

Inside of the `handleSubmit()` function:

```js
function handleSubmit(event) {
  event.preventDefault();

  updateShow(id, show)
    .then(() => {
      navigate(`/shows/${id}`);
    })
    .catch((error) => {
      console.error(error);
    });
}
```

The form is entirely blank when the user goes to the edit form for a show. The user must retype all of the information. This is not a good user experience.

Let's add some more functionality so that the edit form is prefilled. The form should be filled on component mount.

Import `useEffect()`:

```js
import { useEffect, useState } from "react";
```

Import `getOneShow()`:

```js
import { updateShow, getOneShow } from "../../api/fetch";
```

Load the data from one show:

```js
useEffect(() => {
  getOneShow(id)
    .then((response) => {
      setShow(response);
    })
    .catch((error) => {
      console.error(error);
    });
}, [id]);
```

Check that the form data is prefilled for a show and try to edit a show to confirm it works.

## Testing your app

This app does not have unit tests, but you can still confirm the app works as expected.

Take a few minutes to test all your features.

- Navigate from home to `/shows`
- See an index of shows
- Create a new show
- Find the show you created using the search bar
- Edit this show
- Delete this show

## Completed Build

[See the complete build here](https://github.com/joinpursuit/8-0-react-crud-lab/tree/build-complete)
