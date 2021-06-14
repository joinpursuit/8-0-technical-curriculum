# Data Representation with Code

Code exists to help us solve real problems. The most popular languages we use today allow us to express and solve real problems through code in a way that can at times read like plain language.

In this lesson you'll think through how to represent real world concepts in code. You'll also see a few examples of how to do this on your own.

## Learning Objectives

By the end of this lesson you should be able to:

- Represent object properties in the real world as code.

---

## Understanding objects

Look around you -- there are likely lots of different _objects_ that you interact with on a daily basis.

In the context of programming, an object is just about anything. For example, your computer is an object, as is your desk, your chair, and you. Anything that is a noun could be considered an object.

Objects are not verbs. Instead verbs can be conveyed through functions. For example, if you wanted to represent the concept of "running", it would make more sense to use a function. In contrast, you could represent a "runner" as an object.

Why might you want to represent these objects in code?

If you're building an app to track ratings for different hiking paths, you'll need to think about how you want to store that data. Your application will need to represent hikes, locations, and users.

Deciding how to represent these real world ideas in code is critical for building all kinds of applications.

## Translating the real world

Recall the different common data types in JavaScript: booleans; numbers; strings; `undefined`; `null`; and objects, including arrays. When creating a new object, these are the different data types you have to represent that particular object.

For example, consider Mount Rainier, a mountain in Washington state. How might you represent it in code?

```js
const rainier = {
  name: "Mount Rainier",
};
```

To start, you might decide that Mount Rainier should be an object which is a collection of key-value pairs. In contrast to an array, or a simple string, it's easier to organize information in an object.

What other properties does Mount Rainier have that can be represented using JavaScript data types?

```js
// TODO: Update with data.
const rainier = {
  name: "Mount Rainier",
  state: "Washington",
  heightInMeters: 4395,
  isNationalPark: true,
  latitude: 46.8600215,
  longitude: -121.855005,
  hasHiking: true,
  hasSkiing: true,
};
```

The object above is now starting to better represent the actual mountain. There's a huge amount of data you could include, but really it's all dependent on what you want to use this data for. Additionally, there's not really a "right" way to always structure your data.

```js
// TODO: Update with data.
const rainier = {
  name: "Mount Rainier",
  heightInMeters: 4395,
  isNationalPark: true,
  activities: ["hiking", "skiing"],
  location: {
    latitude: 46.8600215,
    longitude: -121.855005,
    state: "Washington",
  },
};
```

In the example above, a few changes have taken place:

1. Location information (i.e. `latitude`, `longitude`, and `state`) have all been placed in a new object under the key `location`.
1. A new key of `activities` has been created that points to an array, in which there are two strings. These strings take the place of the `hasHiking` and `hasSkiing` keys from the previous iteration.

Is the above structure better or worse than the one before? It's hard to say without know what the data will be used for. But there are some benefits to both.

- The first example has a "flatter" structure, meaning that you can access all the values by only using a single key. Sometimes that can be simpler to think about.
- The second example is more organized, in that related data is grouped together by keys. And, it has `activities` as an array, which means you can update it easily while keeping the organization.

### A few more examples

How you build an object all depends on what it should be used for. Here are a few examples of objects, followed a brief description of them.

#### Detailed object

```js
const person = {
  name: {
    first: "William",
    middle: "Emmett",
    last: "Anderson",
    preferred: "Will",
  },
  birthday: {
    month: "December",
    day: 2,
    year: 1990,
  },
  phone: {
    mobile: "5551901789",
    home: "5556549912",
  },
};
```

The object above is very detailed and has key-value pairs broken down into different categories. It might be useful for something like an address book.

#### Lists

```js
const flavors = [
  { name: "Cherry", popularity: 3 },
  { name: "Watermelon", popularity: 4 },
  { name: "Orange", popularity: 2 },
  { name: "Lemon", popularity: 4 },
];
```

The above array contains a list of objects, representing a list of some kind. Each object inside represents a flavor of something, and its popularity. If you ever need to represent a collection of objects, you'll likely do so using an array.

#### Less concrete objects

```js
const transactions = [
  { id: 1, amount: -2015.3 },
  { id: 2, amount: -50.05 },
  { id: 3, amount: 450.0 },
  { id: 4, amount: -2.35 },
  { id: 5, amount: -6.05 },
  { id: 6, amount: -2.35 },
];
```

Each object above represents a transaction, perhaps to something like a bank account. Because the amounts aren't necessarily unique, a new key, `id`, was added to help distinguish each object. IDs can be useful when you want to represent a real world idea that needs some sort of unique descriptor.
