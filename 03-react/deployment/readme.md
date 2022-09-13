# Create React App Deployment

You've been learning React, and soon you'll build a project using React. How do you share your work with others? To share, you must deploy your application to an online service.

## Vocabulary

- Deployment
- Environmental variables
- Continuous Deployment

## Objectives

- Deploy a React application to the web using Netlify.
- Create `.env` configuration files that can be used within a React application created by the create-react-app program.
- Configure environment variables on the Netlify platform.
- Configure Netlify’s continuous deployment options to deploy whenever a commit is pushed to main regularly.

# Introduction to deployment

Soon, you will build a React application that you will want to put on the web so that you can share it with people. How can you achieve this goal?

You could use your laptop. However, to provide uninterrupted access, you must always have your laptop on and connected to the internet.

You could buy another computer whose specific task is to host applications online (often referred to as a server).This approach would cost you money for the hardware and add to your electric bill. You would also have to learn how to configure the computer correctly. Another thing to consider is how important is it that your application still runs if there is a power outage? If it needs to run during a power outage, do you have a backup generator?

If you know very few people will ever visit your application, you could buy a simple computer to work as server. But what if you expect your app to grow in popularity? What if you buy the most powerful server, and it still isn't enough? How do you add more servers?

Another possibility is that your application is about a big event (for example, a huge party for the 2022 Sturgeon moon). You would expect that your application's popularity would increase as the event approaches, but then your application would have few visitors after the event. Would it make sense for you to purchase and set up 100 servers and then try to sell them?

These are real problems that many companies face with their applications, and one way to solve them is to outsource these issues. Many companies like AWS (Amazon Web Services), Heroku, Cloudflare, and more take applications and put them online and figure out the scaling, and other potential challenges of hosting for companies.

Many of these services provide a free tier for hobby applications (they also may be referred to as toy apps). These will be for things like your portfolio or demo applications to show to potential employers. These apps will be available to limited audience for small amounts of time, usually with the goal of being able to see a sample of your work.

## Configuration

Most hosting services strive to make deploying your application online as seamless and easy as possible. However, there are a number of key configurations that must be handled on your end in order for your application to work online.

Configuration can be very challenging because there are a number of crucial steps you must take and you must read the documentation carefully and thoroughly, and then update your application to have the proper set up. Debugging can be challenging as well, since you are working with a new technology; it always takes some time to learn how to read and solve error messages.

## Environmental Variables and API Keys

For some applications, you need to provide an API key to use a third-party service. Typically, you set up these keys locally by putting them in a `.env` file. Git should not track `.env` files and a good way to confirm this is that the `.env` file should NOT be on your GitHub repository.

It is critical that API keys stay private and do not end up available on the web. While some keys are not very valuable (if someone stole them, you might not be able to make further requests, but it would not cost you money), other APIs do cost a lot of money (thousands of dollars a day). These keys are so valuable that people write bots to search for these keys and steal them fairly quickly. Therefore, it's important to learn how to set up all keys correctly.

## Continuous Deployment

Early in the days of personal computing, people could only install applications through a physical disk. New versions and updates were very slow to be released. Now, with the advancements of the internet, you can download and update applications through a website or even allow automatic updates.

This advanced system allows developers to build smaller sets of features and fixes and deploy the changes frequently. A common way to make these deployments is to set up continuous deployment. The setup will be connected to the repository and every time there is a change to the `main` branch, it will trigger an update.

## Netlify

[Netlify](https://www.netlify.com) offers a service to host React applications and has a free tier. It is a reasonably straightforward process to set up an application.

In this class, you will use Netlify to host your React applications.
