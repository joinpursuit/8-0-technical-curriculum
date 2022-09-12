# Props and Component Structuring

You've been learning React, and soon you'll build a project using React. How do you share your work with others? To share, you must deploy your app to an online service.

## Vocabulary

- Deployment
- Environmental variables
- Continuous Deployment

## Objectives

- Create `.env` configuration files that can be used within a React application created by the create-react-app program.
- Deploy a React application to the web using Netlify.
- Configure environment variables on the Netlify platform.
- Configure Netlify’s continuous deployment options to deploy whenever a commit is pushed to main regularly.

# Introduction to deployment

Soon, you will build an application you would like to put on the web so that you can share it with people.

You could use your laptop. However, to provide uninterrupted access, you must always have your laptop on.

You could buy another computer whose specific task is to host applications online (often referred to as a server). But, how big and powerful of a server do you buy?

If you know very few people will ever visit your application, you could buy a simple one.

But what if you expect your app to grow in popularity? What if you buy the most powerful server, and it still isn't enough? How do you add more servers?

What if your application is about the 2022 Sturgeon moon? You would expect that your application's popularity would increase as the event approaches, but then your application would have few viewers after the event. Would it make sense for you to purchase and set up 100 servers and then try to sell them?

These are real problems that many companies face with their applications, and one way to solve them is to outsource the issue. Many companies like AWS (Amazon Web Services), Heroku, Cloudflare, and more take applications and put them online and figure out the scaling issues for the companies.

Many of these services provide a free tier for hobby applications (also called toy apps). These will be things like your portfolio or demo applications. The goal of these apps is for a limited audience to be able to see a sample of your work. The advantage of providing a free tier is that you will gain familiarity with their service and possibly recommend this service to your employer if you are on the job. So, it is a bit of free advertising for them.

## Environmental Variables and API Keys

You need to provide an API key to use a third-party service with some applications.

You set it up locally by putting this key in a `.env` file. Git should not track this .env file and should NOT be on your GitHub account.

It is critical that API keys stay private and do not end up available on the web. While some keys are not very valuable (if someone stole them, you might not be able to make further requests, but it would not cost you money), some APIs do cost a lot of money (thousands of dollars a day). These keys are so valuable that people write bots to search for these keys and steal them.

## Continuous Deployment

Early in the days of personal computing, people had to get a disk of a program and install things through a physical disk. New versions and updates were very slow to be released.

Now, with the advancements of the internet, you can download and update applications through a website or even allow automatic updates.

This advanced system allows developers to build small features and fixes and deploy the changes frequently.

A common way to make these deployments is to set up continuous deployment. The setup will be connected to the repository; every time there is a change to the `main` branch, it will trigger an update.

## Netlify

[Netlify](https://www.netlify.com) offers a service to host React Applications. It is a reasonably straightforward process to set up an application.

In this class, you will use Netlify to host your React Applications.
