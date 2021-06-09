# Objects

## Objectives

- Understand what a JavaScript object is and how to create one
- Know object properties
  - Keys
  - Values
- Create and modify properties of an object

## Keywords

- objects
- dot-notation
- square bracket-notation
- keys/values
- properties

## Introduction

An **Object** is a collection of **key/value pairs**. The pairs are also known as **properties**.

```JavaScript
{ key: value } // This is a key/value pair
```

JavaScript is **object-based**, like many languages (e.g. Python, Ruby, Java). According to Wikipedia, that means the
language "uses the idea of encapsulating state and operations inside objects."

In other words, objects are extremely powerful and fundamental to JavaScript.
More on that in another lesson, but for now, think of them as similar to real-world objects.

## Real-world Example

In English, you might refer to an apple as an object. Similarly to a JavaScript object, an apple has properties,
like _type_ (e.g. "Gala", "Honeycrisp"), _color_, _ripeness_ (e.g. "ripe", "rotten", "unripe") and owner
(e.g. "Tomer", "Maria").

You might represent this in JavaScript like so (syntax explained in next section):

```javascript
{
  type: 'Gala',
  color: 'red',
  ripeness: 'ripe',
  owner: 'Tomer'
}
```

The above JavaScript object represents a single apple. You could represent many apples this way:

```javascript
{
  type: 'Gala',
  color: 'red',
  ripeness: 'ripe',
  owner: 'Tomer'
}
{
  type: 'Granny Smith',
  color: 'green',
  ripeness: 'unripe',
  owner: 'Daniel'
 }
{
  type: 'Golden Delicious',
  color: 'yellow',
  ripeness: 'rotten',
  owner: 'Ashley'
}
{
  type: 'Honeycrisp',
  color: 'red',
  ripeness: 'ripe',
  owner: 'Maria'
}
```

## Syntax

As in the above apple examples, JavaScript objects are often represented using curly braces.
The syntax is simple: the pairs are separated by commas, the keys are separated from values by colons,
and the entire thing is surrounded by curly braces (Note: an **empty object** is just `{}`).

This notation is one common way to declare an object. This is called an `object literal`.

You can then store the result in a variable. For example:

```javascript
let person = {
  firstName: "Erika",
  lastName: "Kim",
  age: 25,
  human: true,
};
```

## Programming Example

Are we going to create apples in our apps? Maybe, for example if you wanted to create an app that tracks inventory
for a grocery store, or an app that tracks the contents of your refrigerator.

But digital examples can also use objects. For example, a Facebook `post` could be an object, as could an Airbnb `reservation`.

It's best to think of an object as a collection of properties that describe something. Like above, we are describing an apple, or a person.

> What you imagine some properties these objects might have?

**Objects vs. Arrays**

If an object is a collection of properties describing an item, then think of an array as a collection of similar items.

Generally you use an array as a list of things. An object is a grouping.

```js
let colors = ["blue", "red", "green"];

let color = {
  pretty: true,
  visible: "yes",
  name: "blue",
};
```

## Getting & Setting Properties

Once you have an object, what might you want to do with it? For starters, you may want to create new properties as well as
read and update existing ones.

### Getting Properties

If you had an object stored in the variable `person` and wanted to get that person's firstName, you could use **dot notation**.
The syntax looks like this:

```javascript
// Same object as before
let person = {
  firstName: "Erika",
  lastName: "Kim",
  age: 25,
};

console.log(person.firstName);
// 'Erika' will be logged
```

If you try to get a property that doesn't exist, `undefined` will be returned.

```javascript
console.log(person.shoeSize);
// 'undefined' will be logged
```

We've been accessing properties of objects through dot notation, but we can also use **bracket notation** which works in a similar way to dot notation but with brackets. If we tried to access `firstName` without quotes around it, we will get an error. Bracket notation is not as easy as dot notation but it does have benefits. For example, if the property you want to access has dashes (`-`) in it, dot notation will not work. In those cases, bracket notation would be better: `add1["another-property"]`.

```js
let obj = {
  firstName: "Corey",
  lastName: "Ladovsky",
};

console.log(obj["firstName"]); // => "Corey"
```

As long as we pass in something that is a string, we can use bracket notation with variables.
Remember that the variable **has** to be a string or number (which gets converted to a string), or else it will throw an error.

```js
let obj = {
  firstName: "Corey",
  lastName: "Ladovsky",
};

let prop = "firstName";
console.log(obj[prop]); // => "Corey"

prop = "lastName";
console.log(obj[prop]); // => "Ladovsky"
```

### Setting Properties

Now that we know how to _get_ an object's properties -- how do we _set_ them? In other words, how do we
add or change properties of an object?

Let's revisit our basic person object:

```javascript
let person = {
  firstName: "Erika",
  lastName: "Kim",
  age: 25,
};
```

Just as we could use dot notation to get the property of a person, we can use it similarly to set a property,
whether it exists or not.

If it already exists, we can change it like this:

```javascript
console.log(person.firstName); // Logs 'Erika'

person.firstName = "Jane"; // Changes firstName property
console.log(person.firstName); // Logs 'Jane'

console.log(person);
// {
//   firstName: 'Jane',
//   lastName: 'Kim',
//   age: 25
//  }
```

If it doesn't already exist, the same notation adds a property:

```javascript
console.log(person.hometown); // Logs 'undefined'

person.hometown = "Arkansas"; // Creates and sets hometown property to 'Arkansas'
console.log(person.hometown); // Logs 'Arkansas'
console.log(person);
// {
//   firstName: 'Jane',
//   lastName: 'Kim',
//   age: 25,
//   hometown: 'Arkansas'
//  }
```

## Arrays vs Objects

Arrays and object are closely related to each other.
An array is really a special kind of object, where the keys are the numbered indices.

```javascript
let myArray = ["firstValue", "secondValue"];
console.log(myArray[0]); // Logs 'firstValue'

let myObject = { 0: "firstValue", 1: "secondValue" };
console.log(myObject[0]); // Logs 'firstValue'
```

### Arrays of Objects

What if you wanted a collection of objects (e.g. a collection of films)? One data structure we learned to store a collection is an array
-- so we could store an array of objects.

For example, we may want to create an array of films, where each film is an object that contains a name,
release year and director.

```javascript
let films = [
  {
    name: "Psycho",
    director: "Alfred Hitchcock",
    released: 1960,
  },
  {
    name: "Citizen Kane",
    director: "Orson Welles",
    released: 1941,
  },
  {
    name: "The Usual Suspects",
    director: "Bryan Singer",
    released: 1995,
  },
];
```

Now, we could access any of the films just as we do any values in an array,
and then access that object's properties. In the below example, we access the name of the first film.

```javascript
console.log(films[0].name);
// Logs 'Psycho'
```

So if I wanted to print to the console all of the films I could write a loop like this:

```js
for (let i = 0; i < films.length; i++) {
  console.log(films[i].name);
}
```

### Objects in Objects

The value of an object can be practically anything; it could even be another object! This is called a **nested object**.

We can access properties in these objects just like any other object.

```js
let closet = {
  winter: {
    hands: "gloves",
    head: "beenie",
  },
  summer: {
    hands: "rings",
    head: "baseball cap",
  },
};

console.log(closet["winter"]["hands"]); // => "gloves"
console.log(closet.winter.hands); // => "gloves"
```
