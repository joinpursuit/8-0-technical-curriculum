# Collaboration with GitHub

## Learning objectives

By the end of this lesson you should be able to:

- Create branches locally on their own machine.
- Merge branches locally and push those changes to GitHub.
- Push branches to GitHub and merge those branches via pull request.
- Pull changes from GitHub to their local machine.
- Share access to a GitHub repository to other developers.

---

## Guiding questions

- Create a new directory from the command line and `cd` into it. What is the command to create a new `git` repository?

- After creating a `git` repository, how many commits does the repository have?

- Create a new file called `favorite-movies.txt`. Then add your changes, commit, and then look at your git history.

  What command will show you all of the commits you've made?

- Create a new branch called `add-movies`. How can you create a new branch?

- In your own words, what is the purpose of creating a branch?

- How do you switch to a newly created branch? Do so, so that you are on the `add-movies` branch.

- How can you tell what branch you are on?

- Open the `favorite-movies.txt` file and add two or three of your favorite movies on separate lines. Then, add and commit your changes.

  What is the current difference between the `add-movies` branch and the `main` branch?

- Go back to your `main` branch. What happened to the contents in your `favorite-movies.txt` file?

- How can you merge the changes from the `add-movies` branch into the `main` branch?

  Once you've determined how, do so.

- Create a new GitHub repository and connect your local and remote repository.

  Currently, what branches are available to you on your local machine? What branches are available on GitHub?

- On your local machine, switch over to the `add-movies` branch. Add one or two more movies and then make a commit.

  How can you push your `add-movies` branch up to GitHub? Once you know how, do so.

- Go to your GitHub repository's page and create a pull request from the branch you just pushed up. Once a pull request is created, merge it.

  Now, what is the difference between your local `main` branch and your remote `main` branch?

- Use `git pull` to sync your local and remote `main` branches.

  On what branch should you run the `git pull` command?

- Is there any difference on your local machine between the `main` and `add-movies` branch at this point? Why or why not?

- In your own words, summarize the journey of the last commit you just made. Use technical terms and make sure to distinguish between activities happening locally vs remotely.

## Group activity

You will be split into groups of two or three. Choose one person to be the "project manager" for the group. Then, do the following.

- The project manager should share access to the repository they just created.
- Other members of the group should clone down the repository. (Remember, you should not put a repository inside of another one, so make sure to `cd` up a directory or two.)
- Have one member of the group (it doesn't matter who) create a new branch with their name. They should add, commit, and push their changes. Then, make a pull request.
- The project manager should merge the pull request.
- Then, each member of the team should pull down the changes to their `main` branch.

Continue this process until every member of the team has had a chance to add a few favorite movies. Remember you will always need to `pull` before making your own branch.
