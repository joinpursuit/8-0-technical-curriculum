# React Props

Today's lesson will be a walk-through on how to get a Create-React App on Netlify.

## Learning objectives

- Create `.env` configuration files that can be used within a React application created by the create-react-app program.
- Deploy a React application to the web using Netlify.
- Configure environment variables on the Netlify platform.
- Configure Netlify’s continuous deployment options to regularly deploy whenever a commit is pushed to main.

## Getting Started

- In the terminal, make sure you are not already inside a git repository, and then type `npx create-react-app YOUR_APP_NAME` (replace `YOUR_APP_NAME` with the actual name of your app)
- `cd` into this new application
- Go to GitHub and create a new public repository.
- DO NOT (your create-react-app will already have these things)
- create a readme
- add a `.gitignore`
- choose a license
- In your `create-react-app`, add the new GitHub remote link.
- `git add .`
- `git commit -m 'first commit'`
- Follow the commands listed in GitHub to push an existing repository to GitHub
- Confirm your `create-react-app` code is now on GitHub.

**IMPORTANT:** Make sure your application runs locally. If it does not run locally, there is no hope of it working on deployment.

**IMPORTANT:** With continuous deployment, you only want the working code to be on `main`. Use branches like `dev` to build and confirm a functional app before merging into `main`.

**IMPORTANT:** Deploy early and often. The best time to deploy is right after you run `create-react-app` - the less code you have written, the less work it will take to debug each deployment in case of an issue.

**IMPORTANT:** You should check your application every time you have changed to the main branch to make sure it still works online.

## Netlify Settings

Log onto Netlify, go to `Team Overview`, and select `New site from Git`.

![Team overview](../assets/1.team-overview.png)

Choose the `GitHub` button - this will take you to a GitHub authentication view.

![Create new site](../assets/2.create-new-site.png)

Scroll down and select `Configure the Netlify app on GitHub`.

![Github Netlify Configuration](../assets/3.github-netlify-config.png)

Choose configure to install Netlify on your GitHub account.

![Install Netlify on GitHub](../assets/4.install-netlify-on-github.png)

Be sure to remember your GitHub password to move forward.

![Log in to GitHub](../assets/5.log-in-to-github.png)

Choose which repo. Use the search bar feature if needed.

![Select repositories](../assets/6.select-repos.png)

Once selected, your view should return to the Netlify dashboard.

![Choose repository on Netlify](../assets/7.choose-repo-on-netlify.png)

Keep the default settings provided and choose the `Deploy site` button.

![Create configuration for deploy site](../assets/8.create-configure.png)

See the status of your deployment. Click on it to see more details.

![Status of deployment](../assets/9.see-status.png)

Check the logs. It is good to get familiar with what is there. When errors occur with the build, this is where you would go to debug.

![Netlify logs](../assets/10.check-logs.png)

Check for the line `Site is live ✨` to confirm your site is live.

![Site is live message](../assets/11.site-is-live.png)

Go to the `Deploys` tab, and click on the link to see your site live. You can also share this link with your friends and family!

![Deploys view](../assets/12.deploys-view.png)

To continue to update your Netlify live site:

- On the `main` branch, confirm that your app works. While working on your app, work on another branch like `dev` and only merge into `main` when your new features are working.
- Add, commit, and push your code to main.

```bash
git add -A
git commit -m "New feature added"
git push origin main
```

- Give your site a few minutes to build.
- Be sure to check the dashboard and live site to ensure everything is working correctly.

## Adding environmental variables to your application

With Create React App, you can add environmental variables using a `.env` file. This file is not tracked by git (it should be listed in the `.gitignore`) file.

All of the environmental variables must start with

```
REACT_APP_
```

Here is an example:

```
REACT_APP_API_KEY=my-secret-key-value
```

Notice that this file is not written in JavaScript, so do not use quotes or semi-colons.

To use this variable in your application. Choose a component where you will use this variable and write:

```
process.env.REACT_APP_API_KEY
```

You can confirm that you are getting the expected value by logging it:

```js
console.log(`${process.env.REACT_APP_API_KEY}`);
```

## Adding environmental variables to your Netlify deployment

Choose `site settings`, then in the `General` menu, find `Build and deploy`, then choose `Environment`.

![General menu](../assets/general-menu.png)

Add, edit and delete environmental variables here.

![Environmental variables](../assets/netlify-environmental-variables.png)

The name of these variables should match what is in your app.

## Allow for links to different views

The way your app is currently configured on Netlify, if configured React Router and had an about page, if you send a link to the `/about` page to a friend, it will give a 404 or redirect back to the home view.

To configure the ability to send a specific page view, you must create a file called `_redirects` inside the `public` folder of your app.

This file must contain the following text:

```
/* /index.html 200
```
