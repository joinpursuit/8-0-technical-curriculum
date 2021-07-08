## Introductory Command Line

## Learning Objectives

By the end of this lesson you should be able to:

- Differentiate between the GUI and the CLI.
- Define and build absolute paths.
- Define and build relative paths.
- Use the `open` command from the command line.
- Use the command line to navigate via absolute and relative paths.
- List files and folders in your current directory with `ls`.
- Define and use flags on the command line.
- Create new directories with the `mkdir` command.
- Create new files with the `touch` command.
- Install and use the `code` command to open VSCode.

---

## Guiding Questions

- What does GUI stand for?

- What does CLI stand for?

- Why is it important that developers use the CLI instead of the GUI?

- "Your computer's filesystem is structured like a tree." What does this statement mean?

- What is the difference between a directory and a file?

- Can a file live in two different directories? Why or why not?

- Open a new terminal window and then type the following command: `pwd`. Then, hit enter.

  What is displayed?

- What does `pwd` stand for?

- Take a look at the following file path:

  ```
  /Users/pursuit
  ```

  Is this an absolute or relative path? How do you know?

- What does it mean for a path to be absolute?

- In the same terminal window, type `open .` and then answer the following questions:

  What does the `open` command do?

  What does the `.` represent?

- What is your "home directory?"

- In the Finder program, you should see a number of folders and potentially files in your home directory.

  In your terminal window, type `ls`.

  How is the output in the terminal window related to what you see in the Finder window?

- `pwd`, `open`, and `ls` are all examples of commands. What is a command?

- Commands are a bit like functions. For example, the `open` command you used earlier took an argument of `.`. How would you describe the argument that the `open` command takes?

- In addition to arguments, commands can include flags or options. In the context of the command line, what is a flag or option?

- How can you identify flags or options in a command?

- Try running the following command in your terminal window.

  ```bash
  ls -a
  ```

  How does the `-a` flag change the `ls` command?

- Try running the following command in your terminal window.

  ```bash
  ls -l
  ```

  How does the `-l` flag change the `ls` command?

- How can you combine both the `-a` and `-l` flags together?

- Try running the following command in your terminal window, which uses a relative path:

  ```
  open ./Desktop
  ```

  How do you know the above path is a relative path?

  > **Note:** If the above command does not work, it likely means you've somehow gotten out of your home directory. Close the terminal program and then reopen it. Then, try running the command above again.

- What does it mean for a path to be relative?

- Try running the following command in your terminal window, which uses a relative path:

  ```
  open ./Documents
  ```

  What folder opened up in Finder? Why?

  > **Note:** If the above command does not work, it likely means you've somehow gotten out of your home directory. Close the terminal program and then reopen it. Then, try running the command above again.

- Is there a difference between running `open ./Desktop` and `open Desktop`?

- The `cd` command allows you to move between different directories. What does `cd` stand for? What arguments does it take?

- Try running the following two commands in your terminal window.

  ```
  cd Desktop
  ls
  ```

  What has changed after running those two commands?

- Try running the following two commands in your terminal window.

  ```
  cd ~
  ls
  ```

  What does the `~` represent?

- Try running the following two commands in your terminal window.

  ```
  cd ~/Desktop
  ls
  ```

  What is the difference between running `cd ~/Desktop` and `cd Desktop`?

- Do you think `~/Desktop` an absolute or relative path? Why?

- In the terminal, use the `open` command to open up your home directory. Then, create a new folder inside with the name `test-directory`.

  In the terminal, what command can you use to see this new directory?

- In the Finder, delete the `test-directory`. _(Do not delete any other folders!)_

  In the terminal, run the following command and then look to your Finder window.

  ```
  mkdir another-test-directory
  ```

  What did the `mkdir` command do? What does `mkdir` stand for?

- The `touch` command allows you to create a file. Run the following commands in the terminal.

  ```
  touch ./another-test-directory/my-test-file.js
  cd ./another-test-directory
  ls
  ```

  In your own words, describe what the above commands are doing.

- Try running the following command which will have you navigate _up_ a directory.

  ```
  cd ..
  ```

  What directory are you currently in after running the above command? What does `..` represent?

- Open up VSCode. What is VSCode? Why do developers not use something like Word or TextEdit to write code?

- Follow [these instructions](https://code.visualstudio.com/docs/setup/mac) to get access to the `code` command in your terminal.

  After doing so, close your terminal program and then re-open it. Then, try running the following command:

  ```
  code ~/another-test-directory
  ```

  What do you see in VSCode?

- Create two new files _at the same time_ in your `another-test-directory` folder from the command line: `readme.md` and `my-file.txt`.

  How can you create multiple files at once?

- Each of the files in `another-test-directory` has a different file extension. What is a file extension and what does each file extension represent on the files you've created?

Once you're done, you can drag the `another-test-directory` folder to the trash.
