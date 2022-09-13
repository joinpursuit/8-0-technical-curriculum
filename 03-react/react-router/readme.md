# Using React Router to Create Page Views

React allows us to build UI (User Interfaces) for websites with components. Front-end frameworks like React are known as SPAs (Single Page Applications), and so far, that's what we've been building - single pages with a lot of functionality. As we've been building React Apps, you may have noticed that we can't use the URL or forward/back buttons in the browser. So if we wanted to have an `about` page and a `main` page, we could only use conditional rendering, and if we wanted to send someone a link to the `about` page, we can't. We'd have to send them to the main page and then tell them to click on the `about` page.

We can add a library called [React Router DOM](https://reactrouter.com/docs/en/v6) that will allow us to bring the functionality of a multi-page application to our React apps. Using a library like React Router will enable us to do client-side routing.

**Caveat:** React Router has undergone significant changes with its different versions. This lesson is on Version 6. When you are googling/looking things up on Stack Overflow, make sure you are looking at something that has to do with Version 6. The old syntax and some old solutions don't work with the new version. If you have familiarity with Version 5, you can [go here](https://github.com/joinpursuit/react-router-v5-to-v6) to see a quick summary of most of the changes that would impact the kinds of builds we are making in this class.

## Learning Objectives

- Understand what problems React-Router solves
- Create different views using React-Router
- Create functional navigation using React-Router
- Create dynamic views
- Change the view after an event

## Vocabulary

- Routing
- Router

## Routing Patterns

Now that we are going to be creating multiple views, how are we going to organize them?

If we go to a website, we may notice some patterns. We usually have some static pages (pages that don't render data/tend not to change much over time), like a welcome page, about, contact, terms of use, etc. Then we have dynamic pages that change based on the data provided.

Let's think about GitHub if you start on the welcome/landing/home page (all these terms are generally interchangeable and refer to the same kind of page, typically at the root URL of the website) - https://github.com.

If you are logged in, you can quickly go to your profile page (click on your profile on the upper right and choose `your repositories`). The profile page will show you a list of your repositories. This view is usually considered to be an `index` view. (If you are not logged in, please log in to see the index).

If you click on any of your repositories, the URL will now be https://github.com/username/one-repo (or similar). This link will take you to a show view showing your one repository but now also a new index of the files within this repo.

If you click on a file in this repository, the URL will be https://github.com/username/one-repo/a-file (or similar). This view shows one file (show view).

If you scroll to the bottom, there is a footer with more links. A lot are static pages like `About`. Look at the URL for the `about` page. Do you notice a pattern here?

If you click on other links in the footer, some will take you to another website. GitHub has chosen to separate things like documentation to a different URL.

The more you click around, look at the URLs, and analyze the different views, the more it can get complex quickly.

When we build our React apps now, we'll have to be thoughtful about how we create our routes. We want to create a reusable and easy-to-understand pattern.

Let's stick with the following patterns:

- Home page, always found at `/`.
- Static pages, descriptive like `/about`, `/contact`, that are easy to understand what they link to.
- Index pages will be plural and descriptive based on what they are showing:
- `/shoes`
- `/cars`
- `/blog-posts`
- Show pages will be `nested` from their `index` page and have a unique identifier. GitHub used repository and file names, but another typical pattern is to use `id`s. An `id` is a unique identifying number or string for some data (a user, a product, etc.). Ids are used to be able to look up a specific piece of data, even if the data changes. For example, someone's email may change, so choosing that as a unique identifier could be a problem. Names, phone numbers, and addresses also may not be unique. If you think about cars, many cars have the same model, color, and year, but all have their unique id (VIN). Some examples of show pages:
- `/shoes/1234`
- `/cars/sedans/2022/hLm88324`

## Resources

- [React Router - Official Website](https://reactrouter.com/docs/en/v6)
- [React Router - github](https://github.com/ReactTraining/react-router)
- [Composition vs Inheritance - React Docs](https://reactjs.org/docs/composition-vs-inheritance.html)
