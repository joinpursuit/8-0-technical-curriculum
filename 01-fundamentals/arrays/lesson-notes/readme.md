# Arrays

## Learning Objectives

By the end of this lesson you should be able to:

- Define what a collection is in the context of software development.
- Define what an array is and describe its properties.
- Create arrays with the array literal syntax.
- Access elements in an array through bracket notation.
- Add elements to an array with bracket notation.
- Update values in an array with bracket notation.

---

## Guiding Questions

- Collections appear in all kinds of programming languages, including JavaScript. What is a collection in the context of software development?

- The following is an array. In as much detail as possible describe the array. Consider describing specific syntax and terms.

  ```js
  ["Clojure", "JavaScript", "Python", "Java"];
  ```

- What kinds of data types can be stored in arrays?

- How can you access the length of an array?

- How does the term "index" relate to arrays?

- What does it mean that JavaScript has zero-based array indexing?

- Brackets are used to create arrays but are also used to access elements inside of an array. The number you place inside of the brackets after the array returns the element at the matching index. Keeping this mind, what do you think will be logged to the console in the code below?

  First make a guess. Afterwards, you can run the code and check your answer.

  ```js
  const languages = ["Clojure", "JavaScript", "Python", "Java"];
  const language = languages[2];
  console.log(language);
  ```

- When you access an element in an array, you can then perform additional operations on that piece of data. With that in mind, what do you think will be logged from the following code? Make your guess before running the code.

  ```js
  const languages = ["Clojure", "JavaScript", "Python", "Java"];
  const language = languages[1];
  console.log(`I'm learning ${language}!`);
  ```

- What do you think will be logged to the console in the code below? Mentally evaluate the code and make a guess before running the code to check your answer.

  ```js
  const languages = ["Clojure", "JavaScript", "Python", "Java"];
  const language = languages[5];
  console.log(language);
  ```

- What do you think will be logged to the console in the code below? Mentally evaluate the code and make a guess before running the code to check your answer.

  ```js
  const languages = ["Clojure", "JavaScript", "Python", "Java"];
  const language = languages["JavaScript"];
  console.log(language);
  ```

- You can add elements to the array with bracket notation by assigning a value to an index that does not currently store an element. The code below shows an example of this.

  ```js
  const languages = ["Clojure", "JavaScript", "Python", "Java"];
  languages[4] = "Golang";
  console.log(languages);
  ```

  What will be the new length of the array above?

- What happens if you skip an index when adding an element to an array with bracket notation? Make your guess as to what will happen in the code below before running it.

  ```js
  const languages = ["Clojure", "JavaScript", "Python", "Java"];
  languages[10] = "Golang";
  console.log(languages);
  ```

  What is the new length of the array above?

- How can you dynamically get the last element of an array no matter the length of the array? Consider the syntax and properties of arrays that have been discussed so far.

- Using what you discovered above, how can you dynamically add an item to the end of an array, no matter it's size, using bracket notation?

- You can update existing elements within an array by using bracket notation as well. The code below shows an example of this. Before running the code, make a guess as to what the end result of the array will be.

  ```js
  const languages = ["Clojure", "JavaScript", "Python", "Java"];
  languages[3] = "Ruby";
  console.log(languages);
  ```

- Using bracket notation, is there any way to remove an item from an array? If so, how? If not, how can you achieve a similar effect?

- Take a moment to reflect on the the different ways of using bracket notation to modify arrays. In what ways are they similar and in what ways are they different?

  For example, how is updating an array similar to adding a new element?
