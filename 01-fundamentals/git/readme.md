# Git

Learn about git, a version control tool, which enables you to back up and merge your code in a productive way!

## Learning Objectives

- Understand what _Git_ is and why it is important to the development process.
- Create a git repository.

## Framing & Background

A **version control system** (or VCS) provides an automatic way to track changes in software projects, giving creators the power to view previous versions of files and directories, develop speculative features without disrupting the primary codebase, securely back up the project and its history, and collaborate easily and conveniently with others. Think of it like the "Save" feature on a local document, except every time you click "Save", you create a snapshot of your project that you can return to, or share with others, anytime.

In addition, using version control also makes deploying production websites and web applications much easier. The version control system that we (and most developers) use is called **Git**. Git is an open standard that lets individual developers and large organizations alike manage a project as it changes over time.

Let's say Corey and Matt are working on a project together and the code is on Matt's computer. If Matt is out, Corey can't work on the code because it's on Matt's computer. Git and GitHub solve this problem by allowing the code to be stored in the cloud on GitHub and available for download. With GitHub, Matt and Corey's code lives in the cloud so if Matt is out, Corey can easily download the latest code from GitHub and work on it. Corey would also be able to see all the previous versions of code, from when they first started the project to its current state.

## Getting started

The most common way to use Git is via a command-line program called `git`, which lets us transform an ordinary folder into a repository (or repo for short) that enables us to track changes to our project.

The easiest way to check for Git is to start a terminal window and use `which` at the command line to see if the git executable is already present:

```bash
$ which git
/usr/local/bin/git
```

If the result is empty or if it says the command is not found, it means you have to [install Git](../local_environment/README.md).

### Set Your Identity

First, a quick clarification. **Git** is the open-source software that manages the version control for our projects. **GitHub** is a company, one of many options to remotely store your Git projects in the cloud. It's one of the most popular websites to do this, but keep in mind - Git and GitHub are not the same.

GitHub uses the email you set in your Git configuration to associate commits to your GitHub account.

Test if you have your email set by running `git config --global user.email` in
your terminal. Hopefully you see the output what your email is set to.

If it's blank, type `git config --global user.email "example@email.com"` (where "example" is your GitHub account's associated email) to set it.

Do the same with your name! Run `git config --global user.name` and see if it's set. If not, set it.`

You will only ever need to run this once. Git will always use this information for anything you do on your computer.

## Initializing a Repo

We’ll begin by making a directory with the name `git-test`. To make a directory, or folder, we use the command `mkdir` which is short for _**m**a**k**e **dir**ectory_. Then you will run the command `cd git-test` which _**c**hanges **d**irectory_ (or folder) to the git-test folder we just created. Then we're going to create a readme file. In short:

```bash
$ mkdir git-test
$ cd git-test
$ touch README.md
```

Now that we're in the folder, we are going to create a [_repository_](https://www.sbf5.com/~cduan/technical/git/git-1.shtml). A Git repository, or "repo", represents a single project managed via Git. Practically, it's a series of files living in your project's folder. These files keep track of each change you make and save in a project.

The way to create a new repository with Git is with the `init` command (short for _initialize_), which creates a special hidden directory where Git stores the information it needs to track our project’s changes.

```bash
$ git init
# Initialized empty Git repository in  /Users/jabyess/git-test/.git/
```

We now have a boilerplate Git repo that we can store our files in and track their changes over time!

> You can see the `.git` folder by doing `ls -a` in your project directory. This is where all the git history lives. If you delete this folder you will delete all your git history.

## Initial Commit

We can check the status of our Git repo by typing `git status`. This will tell us which files, if any, have changed since we last updated our Git repo. Check out what happens when we type `git status`:

![001](screenshots/001.png)

We see here that the README.md file is “untracked”, which means git isn't paying attention to the contents of it. We can add it using the `git add` command:

```bash
$ git add README.md
```

We can add individual files by specifying them by name/filepath, or we can add an entire folder by doing:

```bash
$ git add .
```

Here the `.` tells Git to add **all** untracked files from the current folder (even if, in this case, there’s only one) to the repo, thereby updating the status of each file in the repo. Now if we write `git status` again:

![002](screenshots/002.png)

As implied by the word _unstage_, the status of the file has been promoted from untracked to _staged_, which means the file is ready to be _committed_ to the repository. Untracked / unstaged and staged are two of the four states commonly used by Git.

![git status sequence](assets/git_status_sequence.png)

After adding changes in the staging area we can make them part of the local repository by _committing_ them using `git commit`. We also add the command-line option `-m` to include a message indicating the purpose of the commit. **Commit messages are very important because it tells your collaborators what you changed!** They should be short and clear. If your commit message is multiple sentences, you are probably committing _too much_ and should be committing more often. The preference for commit message is **present-tense**, imperative-style. Example of verbs to use: create, merge, update, delete, refactor, extract, fix

For our example, the purpose is to initialize the new repository, which we can indicate as follows:

```bash
$ git commit -m "initialize repo"
[master (root-commit) 38aeeb2] initialize repo
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md
```

Now our changes are saved locally to our computer. All we've done is commit an empty file, but we're off to a good start!

At this point, we can use `git log` to see a record of our commit:

```bash
$ git log
commit 38aeeb24b51e4a01a61e1095e1f0efe38b137104
Author: lizraeli <leo2002b@yahoo.com>
Date:   Tue Oct 3 18:40:20 2017 -0400

    initialize repo
```

The commit is identified by a unique string of letters and numbers that Git uses to label the commit and which lets Git retrieve the commit’s changes.

### Viewing the diff

It’s often useful to be able to view the changes represented by a potential commit before making it. To see how this works, let’s open the folder in VSCode:

```bash
$ code .
```

Open `README.md` and write `hello, world` in it.

Then type `git diff` to see the changes.

Git shows the difference between the last commit and unstaged changes in the current project:

![003](screenshots/003.png)

> The + indicates a line was added, and shows the contents of the line.

We can commit this change by again adding the file and then committing.

```bash
$ git add README.md
$ git commit -m "add content to readme"
[master 092beb2] add content to readme
 1 file changed, 1 insertion(+)
```

Having added and committed the changes, there’s now no diff:

```bash
$ git diff

```

In fact, simply adding the changes is sufficient; running `git add -a` would also lead to there being no diff. To see the difference between staged changes and the previous version of the repo, use `git diff --staged`.

We can confirm that the change went through by running `git log`:

![004](screenshots/004.png)

### Adding a Markdown tag

Adding a `#` before the text `hello world` will cause it to appear as a header:

```markdown
# hello, world
```

As before, we’ll run git status and git diff to learn more about what we’re going to commit to Git. The status simply indicates that `README.md` has been modified:

![005](screenshots/005.png)

Meanwhile, the diff shows that one line has been deleted (indicated with -) and another added (indicated with +):

![006](screenshots/006.png)

At this point, we’re ready to add and commit our changes.

```bash
$ git add README.md
$ git commit -m "Add a # tag"
[master ea24eb6] Add a # tag
 1 file changed, 1 insertion(+), 1 deletion(-)
```

### Adding a line of text

Let's add a blank line followed by our name to `README.md`:

```markdown
# Hello, world

My name is Lev
```

As usual, we can see the changes represented by our addition using `git diff`:

![007](screenshots/007.png)

### Git log

The `git log` command can show the entire commit history of our repo. For each commit, it will show its id, the author, the date, and the commit message. To limit the number of commits we can add the flag `-[number]`: this will show the provided number of commits, from newest to oldest.

![011](screenshots/011.png)

Github also shows us this in a different format on a nice webpage, but sometimes it's helpful just to quickly look in our terminal.

The important thing to notice here is the long string of characters after the word `commit`. This is called the **commit sha** which is a unique identifier for each commit.

```
commit aba9ad9ae8d8ff6a23a10a691f690f7934d47986
```

We'll use this in a later step!

## Git reverts

One fundamental philosophy of git is that it's **append only**. This means you can't delete a commit, because that would be deleting some of the history of the project.

We do have an option in case you want to _undo_ something previously committed, and that's the `revert` function.

A `revert` is basically another commit that does the opposite of a commit. So if you added 4 lines and removed 2, a revert would remove those 4 lines and add 2.

When doing a revert, you have to tell git **which commit you want to revert**. This is where `git log` and the `commit sha` come in handy.

Steps to revert:

- Make sure you don't have any un-committed changes.
- `git log` to see the commits and associated `sha`s
- Copy the entire sha of the commit you want to revert
- `git revert <sha>`
- Enter a commit message. Close the window that you wrote the message in.
- Your revert should be done! Check the contents of the files to see if the changes are there.

## Resources

- [Git tutorials](https://www.atlassian.com/git/tutorials)
- [Git cheatsheet](http://ndpsoftware.com/git-cheatsheet.html)
- [Git flight rules](https://github.com/k88hudson/git-flight-rules)
- [Try Git](http://try.github.io)
- [Pro Git ebook](https://git-scm.com/book/en/v2)
- [Learn Enough Git To Be Dangerous](https://www.learnenough.com/git-tutorial)
