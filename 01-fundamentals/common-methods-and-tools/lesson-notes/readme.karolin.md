# Common Methods and Tools

So far you've learned a lot of fundamentals about coding and JavaScript.

We're going to build on that knowledge by taking some time to learn about some built-in tools, how to look them up and use them, and also we'll practice using documentation and talking about code.

## Summary of Topics Covered So Far

- Data types

  - Numbers/NaN
  - Strings
  - Booleans
  - Undefined/null
  - Arrays
  - Objects

- Variables/Scope

  - Assigning variables
  - Using variables
  - Changing variable values
  - Where can variables be accessed

- Expressions

  - Arithmetic (addition, subtraction, multiplication, division)
  - Modulo/Modulus (remainder)
  - Greater than/less than/equal to
  - AND/OR
  - incrementing/decrementing variables (`++`, `-=`)

- Control flow

  - if/else statements (Boolean/truthy/falsey)
  - loops

- Functions

  - Creating a function
  - Using a function
  - Return values

- Arrays

  - Creating an array
  - Updating an array
  - Accessing values in an array
  - Looping over an array

- Objects

  - Creating an object
  - Updating a property on an object
  - Accessing values in an object

- Combining Arrays and Objects

What else have you learned so far?

## Common Problems

When working with things from the above list, common problems arise, rather than having to solve them from scratch, there are built-in tools and methods to help you.

Let's talk through some common things you will likely end up doing a lot

- Numbers

  - Check if a variable a number?
  - Convert a string into a number
  - Round a number up or down
  - Set a certain number of decimal places
  - Increase or decreasing a value with a set amount

- Strings

  - Is what we are working with a string?
  - Convert a number into a string
  - Convert a string to upper case or lower case
  - Convert a string into an array
  - Replace a value in a string (i.e. - change every instance of `their` to `they're` in a paragraph)
  - Check if a word/phrase is inside a string
  - Get a particular character in a string
  - Concatenate (put some separate strings together into one) string
  - Remove extra whitespace (think of someone who enters their username into a website and accidentally adds a space before or after)

- Arrays
  - Add to the front of the array
  - Add to the end of the array
  - Remove the last item from the array
  - Remove the first item from the array
  - Convert an array into a string
  - Check for a value inside the array
  - Find the index of a certain item in the array
  - Add to the middle of an array
  - Remove from the middle of an array
  - Combine two or more arrays

What other ones can you think of?

## Common Tools

You have likely already encountered some helpful built-in tools like `.push()`. There are many more.

It is impossible to teach every single one, there are new ones being added, old ones that are no longer used, you may find that you are working in a different language other than JavaScript and are encountering the same problem(s), and the time it would take to try to teach every single problem and tool would be immense.

Additionally, there would be the issue of memorizing each one. There are some that you will use often and will remember because of that. There are others you will use infrequently and some you will never use. It all depends on the work you are doing.

There is a better way than trying to memorize every single method. And that's what we've come to refer to as `googling`.

Let's look at how we could approach adding an element to the end of an array.

### Step 0: What are You Trying to Solve

Before trying to solve a problem with code, make sure you understand what you are trying to solve and what they expected outcome should be.

Try writing some psuedocode or making a flow chart:

```js
const array = ["candle", "lamp"];

// add this to the array... where?
const orb = "a magical glowing orb";

// Add orb to END of array
// Output should be
// ["candle", "lamp", "a magical glowing orb"];
```

Problems are much harder, if not impossible to solve if you do not have clarity on what you are solving for and what you are expecting to happen.

### Step 1: Googling

Googling is a skill. Learning what terms to google and how to find an answer that suits your needs takes time and practice.

Google attempts:

- arrays
- stuff you can do with arrays
- add stuff to an array
- add to the end of an array
- javascript add to end of the array
- add to end of an array javascript

Some of these will give you better results than others. When it comes to coding, you'll learn the right level of detail and order of keywords over time.

### Step 2: Finding the best answer

If we use the last search parameters, we will likely end up with top results from

- w3schools
- stackoverflow
- MDN (developer.mozilla.org)
- Some other online tutorials/guides
- Some personal blogs

Which one do you go to? That will take practice to find the right one that suits your style and whether you are just looking for syntax or a better explanation, or some samples to test.

Over time you will also be able to dismiss things that are not useful and be able to focus on useful answers much faster.

### Step 3: Integrating it into your code

MDN Code Example:

```js
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// expected output: 4
```

This is so close! We don't want the output to be `4`, we want the whole array

```js
const array = ["candle", "lamp"];

// add this to the array... where?
const orb = "a magical glowing orb";

// Add orb to END of array
// Output should be
// ["candle", "lamp", "a magical glowing orb"];
array.push(orb);
console.log(array);
```

![](https://www.reddit.com/r/ProgrammerHumor/comments/cwsmdv/a_developer_copying_code_from_stackoverflow/)

### Step 4: Explaining What you have done

By now, your mind's eye may have a crystal clear idea of what you have done and how it works. To become a really great coder, you must be able to explain what you've done to other people. To become better at explaining, you must practice trying to explain code. There is no way around it.

Commenting your code and being able to explain it to others is an integral part of success.

## In Class Activity

We're going to break into groups and assign at least one method to each group.

We'll give you time to work on looking up what the method does and how to use it. You can use a repl or text editor or other set of tools to code your answer. Whatever you and your team feels most comfortable with.

Then you'll present your code to the rest of the class (through screen-sharing) and share your code example with the class by talking through it and then sharing your notes in slack.


<hr />
Example notes in Slack:

Don't forget to format your code. You can slack yourself and edit your notes before copy and pasting them to the class

![](https://i.imgur.com/EFib4Mt.png)

<hr />

### Samples to work with

You can come up with your own, but if you need a place to start, here are some examples:

- Numbers:

  - `10`
  - `.1`
  - `1_234`

- Strings:

  - "Rose rose to admire her rosey rose. "
  - " I love lamp"

- Arrays

```js
const supplies = [
  "laptop ",
  "  phone",
  "charger",
  "mints",
  "map",
  "pen",
  "paper",
];
```

```js
const emergency = ["aspirin", "bandage", "deodorant", "lip balm"];
```


## Task

You will have 15 minutes to research and prepare.

Match your zoom room number to your task:


1. `toLowerCase()`, `toUpperCase()`
1. `trim()`
1. `split()`
1. `includes()` (String)
1. `replace()` (ignore Reg Ex)
1. `charAt()`
1. `repeat()`
1. `typeof`
1. `Number()`
1. `toFixed()`
1. `Increment ++`, `Decrement --` ,`+=`, `-=`
1. `join()`
1. `includes()` (Array)
1. `indexOf()`
1. `pop()`, `shift()`
1. `push()`, `unshift()`
1. `reverse()`
1. `slice()`
1. `splice()`
1.  `Math.random()`
1.  `Math.min()`, `Math.max()`
3. `concat()`
