# Common Methods and Tools

## Setup

Please complete the following before the lesson begins:

- Open and then fork this [repl](https://replit.com/@Pursuit/Warmup-Common-Methods-and-Tools#index.js).
- Complete the Warmup Questions & Tasks detailed at the top of the repl.

## Learning Objectives

- Manipulate strings with common methods and tools.
- Manipulate numbers with common methods and tools.
- Manipulate arrays with common methods and tools.

---

## Guiding Questions

- What is a method?

- Documentation can sometimes be difficult to read, but is essential to your success as a developer. Take a look at the following page from the Mozilla Developer Network that describes the `.push()` method. Then, describe in your own words what the `.push()` method does.

  - [MDN: .push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

- In your repl, come up with a code example that demonstrates how `.push()` works. Think of an example that would help you describe `.push()` to another classmate.

- Using bracket notation, you can perform the same effect as `.push()`. What is the benefit to using `.push()`, if any? What are the differences between the two options?

### Group activity

In groups, you will be assigned one or more methods or tools. With your group, look at the documentation and come up with a few code samples.

Once your group has had time to do its research, you will be split into different groups where you will present what you learned to your classmates. Be prepared to answer questions to best of your ability about what you've learned.

If there are any lingering questions, write them down so that you can ask your instructor.

#### Groups

| #   | Topics                                                                                            |
| --- | ------------------------------------------------------------------------------------------------- |
| 1   | [.toLowerCase()][lowercase], [.toUpperCase()][uppercase], [.trim()][trim]                         |
| 2   | [Number()][number], [.toFixed()][fixed], [Increment (++)][increment], [Decrement (--)][decrement] |
| 3   | [.pop()][pop], [.shift()][shift], [.unshift()][unshift]                                           |
| 4   | [String .includes()][string-includes], [.replace()][replace] (ignore RegExp)                      |
| 5   | [Bracket notation with strings and .charAt()][character-at], [.join()][join]                      |
| 6   | [.concat()][concat], [.split()][split]                                                            |
| 7   | [Array .includes()][array-includes], [Array .indexOf()][array-index-of]                           |

[lowercase]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
[uppercase]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
[trim]: http://mozilla.orghttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#function_syntax
[fixed]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
[pop]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[string-includes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
[replace]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[character-at]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#character_access
[join]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
[concat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
[split]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[increment]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
[decrement]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement
[array-includes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
[array-index-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

## Exercise

Copy the following code into your repl. Then, solve each problem as described.

Once you're done, check in with an instructor.

```js
// 1. Convert the string "   Hammer   " to "hammer".
let problem1 = "   Hammer   ";
console.log(problem1);

// 2. Convert the string " screw driver " to "SCREWDRIVER".
let problem2 = " screw driver ";
console.log(problem2);

// 3. Convert the string "wRENCH" to "Wrench".
let problem3 = "wRENCH";
console.log(problem3);

// 4. Use the `.push()` or `.unshift()` method to add three tools to the array.
let problem4 = [];
console.log(problem4);

// 5. Use the `.pop()` or `.shift()` method to remove one tool from the array.
let problem5 = ["hammer", "nail"];
console.log(problem5);

// 6. Combine the two arrays, `problem4` and `problem5`, below.
let problem6 = null;
console.log(problem6);

// 7. Round the number below to two decimal places. (i.e. 14.99)
let problem7 = 14.999999994;
console.log(problem7);

// 8. Convert the text below into a number. (i.e. 14.99)
let problem8 = "$14.99";
console.log(problem8);
```
