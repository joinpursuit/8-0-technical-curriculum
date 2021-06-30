# GitHub

## Setup

Please complete the following before the lesson begins:

- Open this [Markdown file](./warmup.md).
- Complete the Warmup Questions & Tasks detailed at the top of the file.

## Learning Objectives

By the end of this lesson you should be able to:

- Differentiate between git and GitHub.
- Identify important visual aspects of the GitHub repository page.
- Connect your local git repository with a remote GitHub repository.
- Push from your local git repository to your remote repository.
- Fork and clone a repository.
- Create a pull request using a forked repository.

---

## Guiding Questions

- Git and GitHub are different. What are some of the differences between them?

- Go to the main page for this repository. What account owns this repository? How do you know?

- Where can you find the entire commit history for a GitHub repository?

- On your machine, run the following commands outside of an existing git repository to create a new folder and create a new file in that folder.

  ```bash
  mkdir git-and-github
  cd git-and-github
  touch readme.md
  ```

  Then, open up the folder with VSCode and add the following text inside of the `readme.md` file.

  ```
  # Getting Started with Git & GitHub

  This is my first time connecting a local git repository to GitHub.
  ```

  What commands must you run to initialize this folder as a git repository, stage the readme file, and create a new commit?

  Once you've determined what you need to do, run those commands. You should now have a local git repository with a single commit.

- Click the button to create a new repository from the [github.com](https://github.com) homepage.

  You will then be brought to a new page where you will be asked to create a repository.

  Will this create a repository on your computer?

- Choose a name for your repository. It's good practice to pick a name that is the same or similar to the local git repository it will be connected to. Then, click the "Create repository" button.

  After clicking the "Create repository" button, you will be brought to a new page. Take a look at the code blocks it suggests you run _but do not run either of them yet._

  Which code block do you think you'll be running? Why?

- The repository you created on GitHub is your "remote" repository while the repository you created on your machine is called your "local" repository. What does it mean for a repository to be "local" or "remote?"

- On GitHub, you will be copying the commands underneath the heading "...or push to an existing repository from the command line." However, it's important to generally understand commands you copy before running them.

  Copy and paste the first line into your terminal, which should look something like the following:

  ```bash
  git remote add origin <url>
  ```

  The above command adds a new connection from your local repository to a remote repository. It also gives this connection a name. What is the default name for this connection?

- The following two commands can now be run.

  ```bash
  git branch -M main
  git push -u origin main
  ```

  The first line sets the main branch to be called "main". You will learn more about branches later on. For now, know that the "main" branch is where your commit history will live.

  The `git push` command pushes code from your local repository to the remote repository.

  After running all of the suggested lines of code, refresh your GitHub repository. What's different?

- You just completed your first push to GitHub. Congratulations!

  Take a moment to reflect on all of the steps you needed to take to make a push to a new remote repository. Assuming you have a local repository with at least one commit, what steps would you need to take to repeat this process?

  Write your process in your `readme.md` file using Markdown.

- Add the changes you made to the `readme.md` file, commit those changes, and then push those changes to GitHub with the following command.

  ```
  git push
  ```

  Refresh your remote GitHub repository. What on the page has changed?

- Create a new file in your local repository called `playlist.md`. Add the following contents to it.

  ```
  # My Playlist
  ```

  Add your changes, commit, and push those changes to GitHub. Refresh your remote GitHub repository. What on the page has changed?

- Update your `playlist.md` file and include one or two of your favorite songs.

  Follow the process for adding, committing, and pushing your changes. Confirm that the process worked by looking to the terminal and GitHub.com.

- What does it mean to "fork" a repository?

- How can you know whether or not a repository has been forked?

- What does it mean to clone a repository?

- Before forking and cloning, what steps should you take to make sure the process works?

- What is a pull request?

## Exercise

Fork and clone the repository below. Then, follow the instructions in the `readme.md` file.

Once you're done, create a pull request against the original repository. Then, check in with an instructor.

- [Forking with GitHub Exercise](https://github.com/joinpursuit/8-0-forking-with-github-exercise)
