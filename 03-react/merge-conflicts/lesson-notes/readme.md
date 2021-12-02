# Merge conflicts

## Learning objectives

By the end of this lesson you should be able to:

- Manage merge conflicts through the GitHub GUI.
- Manage merge conflicts locally through the `git` program.
- Describe best practices for working with a team on Git and GitHub.

---

## Guiding questions

- What does it mean to "merge" two branches together?

- Why do merge conflicts occur?

- Take a look at the following image which shows a merge conflict in VSCode. Then, answer the questions below.

  ![Conflict highlighting in VSCode.](../assets/vscode-conflict.png)

  - Where do the `<<<`, `>>>`, and `===` symbols come from?
  - What do those symbols mean?
  - How would you "resolve" this merge conflict?

- What are some ways you can avoid merge conflicts when working with others?

## Group activity

In small groups, complete the following:

1. Elect one person to be the team lead. That person should take the following steps:

- Run the code below in their terminal _outside of_ an existing `git` repository.
  ```bash
  take group-merge-conflicts
  git init
  echo ".DS_Store" > .gitignore
  git add .
  git commit -m "Initial commit"
  ```
- Create a new repository on GitHub.
- Connect the local repository with your remote repository.
- Invite your other team members to collaborate on the repository with you.

2. All other members of the team should clone down the repository. This means that everyone should have the exact same repository and commits.

1. The team lead should then add, commit, and push a new file called `index.js`. This can all be done on the `main` branch. Include the following code inside that file.

   ```js
   function fn(...c) {
     if (!c.every((a) => Number.isNumber(a)))
       throw "All arguments must be numbers.";
     return c.reduce((a, b) => a + b);
   }

   fn(1, 2, 3); //> 6
   fn(10, "B", 20); //> error All arguments must be numbers.
   ```

1. After the changes have been pushed up to the `main` branch, all other members should `git pull` those changes down. Everyone should now have the same code.

1. Every member of the team should then work to update the code above. While the code works, update the code so that it is more readable. For example, change the names of variables, make the syntax more verbose, etc.

   The team lead should do their work on the `main` branch. Every other person in the group should create a new branch with their name and work on that branch.

1. Once everyone has completed their work (~5 minutes), everyone should push up their code to the branch their working on. That is, the team lead should push up to the `main` branch while other members of the team will push up to GitHub with branches that have their names.

1. Non-team lead members should create pull requests with their new branches. These pull requests will likely have merge conflicts.

1. Members of the group should then rotate sharing their screen. When a person is sharing, they should go through the process of resolving their merge conflict with the rest of the group. The code should continue to work. After resolving the conflict, merge the code and then go to the next person.

1. Once everyone has merged in their code, all members should `git pull` from the `main` branch.
