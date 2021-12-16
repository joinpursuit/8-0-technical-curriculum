# Repl.it

## Setup

Please complete the following before the lesson begins:

- Open Chrome.
- Open Slack and go to the private channel for your class.
- Login to your Pursuit email account.
- Login to [Repl.it](https://replit.com/).
- Login to Canvas and go to the Signing Up for Repl.it lesson.

## Learning Objectives

By the end of this lesson you should be able to:

- Describe what Repl.it is.
- Create a new repl to run JavaScript code.
- Find your repl’s share link so that others can work with you.
- Fork a repl to your own account.

---

## Guiding Questions

- The main page of Repl.it calls it an “in-browser IDE.” What does this mean?

- REPL is an acronym. What does REPL stand for?

- Under "Create", hit the "+" button to start a new repl. In the "Template" menu, search for and select Node.js. (Node.js is a *JavaScript Runtime Environment* -- more on this later).

  Today you’ll be learning how to use Repl.it. Instead of the default nonsense name, what would be a good name for this repl?

- Click the “Create repl” button at which point you will be brought to a new page with three different sections. Copy and paste the code below into the middle section and then press the “Run” button at the top of the screen.

  ```js
  console.log("Welcome to Pursuit!");
  ```

  Based on what you know so far, how would you describe the middle and right section?

---

> For the next few questions, you will work with others in a breakout room.

- Choose one person to host the repl. That person should click the "Invite" button in the upper-right corner of the screen and copy the join link at the bottom of the window that pops up. Share this link in the Zoom chat. Everyone else should click that link.

  What happens when someone clicks the link?

- One person should comment out the code that currently exists in the repl. (Remember that you can comment out code with `//`.) A different person should copy and paste the following code into the repl. _If there are only two people in your group, you can remove the third `console.log()`._

  ```js
  console.log(
    `My name is ${name1} and I live in ${location1}. When I'm not learning to code, I really enjoy ${hobby1}. The last time I was in a classroom was in the year ${year1}. Before joining Pursuit, I was ${previously1}.`
  );
  console.log(
    `And my name is ${name2} and I live in ${location2}. When I'm not learning to code, I really enjoy ${hobby2}. The last time I was in a classroom was in the year ${year2}. Before joining Pursuit, I was ${previously2}.`
  );
  console.log(
    `Finally, my name is ${name3} and I live in ${location3}. When I'm not learning to code, I really enjoy ${hobby3}. The last time I was in a classroom was in the year ${year3}. Before joining Pursuit, I was ${previously3}.`
  );
  ```

  What variables will you need to create before this code can appropriately run?

- Try running the code above. What error do you get? Why?

- The second line of the error that shows on the right-hand side should have `index.js` somewhere in the line, with two numbers after it. What does `index.js` refer to? What do you think each number means? Take your best guess and then move on to the next question.

- Create the necessary variables so that the code will run, with each person in your group filling out information about themselves. Did you decide to use `var`, `let`, or `const`? Why?

- Take a look at the following code. Don't run it yet!

  ```js
  if (year1 > year2 && year1 > year3) {
    console.log(`${name1} was in a classroom most recently!`);
  }
  ```

  Take a look at the values you have for `year1`, `year2`, and `year3`. Will the statement be logged? Why or why not? _If your group only has two people, remove `&& year1 > year3` from the code above._

- Copy and paste the code above into the Repl.it and then hit the Run button. Was your guess correct? If not, what did you miss?

> Your instructor will bring you back to the classroom in just a bit. _Do not close_ the tab open to the repl you were just working on.
>
> In the meantime, get to know each other! You could ask each other the following questions while you wait:
>
> - Do you have any pets?
> - Do you have a favorite food?
> - Are you currently watching any shows that you really enjoy?
> - Why did you decide to apply to Pursuit?

---

- In your group's repl, if you did not create the repl you and your group worked on, click the name of the repl in the top-left corner. Then, click the three dots menu (i.e. "..."). Finally, click the "Fork" option.

  Did anything change on your page? What did this option do?

## Exercise

The code you copied earlier checks to see whether or not `year1` is the largest year out of all the other years. If it is, `name1` is declared to be the person who was in the classroom most recently.

```js
// Checks to see if year1 is the largest year.
if (year1 > year2 && year1 > year3) {
  console.log(`${name1} was in a classroom most recently!`);
}
```

Update your code with more conditionals that account for the following cases. In each case, make sure to print something using `console.log()`.

```js
// Check to see if year2 is the largest year.

// Check to see if year3 is the largest year.

// Check to see if both year1 and year2 are the largest year.

// Check to see if both year1 and year3 are the largest year.

// Check to see if both year2 and year3 are the largest year.

// Check to see if year1, year2, and year3 are all equal to each other.
```

After each conditional statement is completed, make sure to press the Run button to see if your code works. You may need to adjust

There are many ways to accomplish this goal, so don't get hung up on trying to find the "right" way.
