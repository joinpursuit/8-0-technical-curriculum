# Introduction to Algorithms

Due to how our culture talks about the term algorithms, it's easy to be under the misconception that you need to be a genius to understand algorithms. However, this is plainly wrong. The term algorithm simply refers to a set of instructions that is used to do something. In this lesson, you'll learn more about the term algorithm and begin to write your own algorithms, in plain English.

## Learning Objectives

By the end of this lesson you should be able to:

- Define the term algorithm.
- Write algorithms in plain English to solve for everyday problems.

---

## What is an algorithm?

An algorithm is a set of instructions that can be used to do something. Anything, really. Your daily life is full of algorithms, even though you likely don't call them that. Particularly good algorithms are efficient, repeatable, and elegant. However, these aren't requirements.

Watch the first half of the video below (up until about 2:19) that describes algorithms and gives a few different examples. The example with the phone book may be particularly difficult to understand. If you need to, watch the video a couple of times until you understand the general concept.

- [YouTube: What is an algorithm?](https://youtu.be/e_WfC8HwVB8)

In the example above, two examples were mentioned:

- An algorithm for sorting your laundry.
- An algorithm for finding a name in a phone book.

While each of these algorithms can be written in code, they can also be simply described in plain language.

### Everyday algorithms

You likely follow all kinds of instructions in your daily life. For example, whenever you follow a recipe, you are following a list of instructions with an intended outcome. Take a look at the following recipe for chocolate chip cookies.

```
Preheat oven to 350 degrees Fahrenheit. Then, cream together the butter,
white sugar, and brown sugar until smooth. Beat in the eggs one at a time,
then stir in the vanilla. Dissolve baking soda in hot water. Add to batter
along with salt. Stir in flour, chocolate chips, and nuts. Drop by large
spoonfuls onto un-greased pans. Bake for about 10 minutes in the preheated
oven, or until the edges are nicely browned.
```

The above description includes a number of steps to follow. In fact, these steps could be rewritten to look even more like a step-by-step process.

```
1. Preheat oven to 350 degrees Fahrenheit.
2. Cream together the butter, white sugar, and brown sugar until smooth.
3. Beat in the eggs to the butter and sugar mixture one at a time.
4. Stir the vanilla into the mixture.
5. Dissolve baking soda in hot water.
6. Add baking soda to batter along with salt.
7. Stir in flour, chocolate chips, and nuts.
8. Drop batter by large spoonfuls onto un-greased pans.
9. Bake for about 10 minutes in the preheated oven, or until the edges are nicely browned.
```

Each of these individual steps might even be able to be broken down further. Regardless, you now have a series of sequential steps that can be followed to create chocolate chip cookies.

There's one component missing from the algorithm above: ingredients! Just like with a recipe, many algorithms require some kind of input in order to create their output.

<details><summary>❗️ What is an algorithm you use?</summary>
  Think of the daily tasks you do throughout the day. What might be described as an algorithm? Take a moment to think through the specific steps you follow, and what the desired outcome is.
</details>

### Inputs and outputs

While not required, almost every algorithm makes use of some kind of input. That input is used to help the algorithm accomplish its intended goal, or output. In the example above of baking cookies, the input for the recipe is the actual ingredients list.

```
- 1 cup butter, softened
- 1 cup white sugar
- 1 cup packed brown sugar
- 2 eggs
- 2 teaspoons vanilla extract
- 1 teaspoon baking soda
- 2 teaspoons hot water
- ½ teaspoon salt
- 3 cups all-purpose flour
- 2 cups semisweet chocolate chips
- 1 cup chopped walnuts
```

The ingredients above are required in the specified amounts in order to create the correct output of a delicious chocolate chip cookie. If those ingredients are skewed, the desired output may not be achieved.

## Writing algorithms

To write an algorithm in plain language, you should answer the following questions:

- What is the desired output of this algorithm?
- What inputs are required to achieve this outcome?
- What set of steps need to be followed in order to achieve the output?

Once you've answered these questions, you should write a set of instructions that is as precise as possible. For example, if you were writing an algorithm for how to make a peanut butter and jelly sandwich, you might write a step that sounds like this:

```
Spread jelly and peanut butter on the bread.
```

However, this step is unclear. Do you spread both the jelly and peanut butter on the same piece of bread? Does it matter which side you spread it on? A better step may read like this:

```
Spread jelly on one piece of bread, filling the surface area of the
bread's crumb, as opposed to its crust. Spread the peanut butter on
the other piece of bread, in a similar fashion.
```

The above reads more precise. Precise algorithms have a better chance of resulting in your intended outcome.

<details><summary>❗️ Write an algorithm</summary>
  Using either the algorithm you came up with earlier or a different one, write out a detailed series of steps to produce the desired outcome. Don't forget to include inputs, if needed.
</details>

### Edge cases and the "happy path"

Recall this step from earlier that was part of the algorithm for baking chocolate chip cookies.

```
9. Bake for about 10 minutes in the preheated oven, or until the edges are nicely browned.
```

This step allows for an edge case. An edge case is a situation that occurs during the process of executing an algorithm that, while unlikely, needs to be accounted for. In this case, the recipe is accounting for the fact that some ovens might run hot or the baker may have used too much or too little batter. In general, when following the above algorithm, you should bake for 10 minutes. But, _if the edges are nicely browned_, the process changes slightly.

Edge cases are important to keep in mind when thinking about algorithms. For example, when following directions to a new location, you may need to keep in mind any road closures or inclement weather. In the case of separating laundry, you may have a situation where you have no whites to separate out.

Thinking of these edge cases can quickly slow down the development of an algorithm. Developers often refer to the "happy path" when designing algorithms. The "happy path" references the most typical scenario for an algorithm. In the cookie example above, the "happy path" could be referred to as the cookies being perfectly baked at 10 minutes exactly.

When designing algorithms, first design for the "happy path" and then consider any edge cases that may occur.

<details><summary>❗️ Consider edge cases</summary>
  In the algorithm you came up with earlier, you were likely already thinking about the "happy path." Are there any edge cases that are important to keep in mind for your algorithm? How can you update your algorithm to accommodate those rare but expected scenarios?
</details>
