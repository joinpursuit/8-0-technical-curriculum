# HTML Introduction

## Goals

- Understand what HTML is and what it is used for
- Create an HTML document
- Use paragraph, heading, strong and emphasis tags appropriately in an HTML document
- Understand how list tags work in HTML
- Use ordered and unordered list tags appropriately in an HTML document
- Use link tags appropriately in an HTML document
- Use image tags in an HTML document
- Create an appropriate form using the HTML form tag

## Keywords

- Hypertext Markup Language (HTML)
- Tags
  - Paragraph (`<p>`)
  - Headings (`<h1>`, `<h2>`, etc)
  - Strong (aka **bold**, `<strong>`)
  - Emphasis (aka _italics_, `<em>`)
  - Ordered List (`<ol>`)
  - Unordered List (`<ul>`)
  - List Items (`<li>`)
  - Link (`<a>`)
  - Image (`<img>`)
  - Form (`<form>`)
  - Form Input (`<input>`)
  - Line break ()`<br>`)

## Resources

- [What is HTML? (video)](https://www.youtube.com/watch?v=CKlh1lwe2rY)
- [HTML Intro - W3Schools](https://www.w3schools.com/html/html_intro.asp)
- [HTML - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML Paragraphs - HTML Dog](http://htmldog.com/guides/html/beginner/paragraphs/)
- [HTML Headings - HTML Dog](http://htmldog.com/guides/html/beginner/headings/)
- [HTML Lists - HTML Dog](http://htmldog.com/guides/html/beginner/lists/)
- [HTML Lists - W3Schools](https://www.w3schools.com/html/html_lists.asp)
- [HTML Links - HTML Dog](http://htmldog.com/guides/html/beginner/links/)
- [HTML Links - W3Schools](https://www.w3schools.com/html/html_links.asp)
- [HTML Images - HTML Dog](http://htmldog.com/guides/html/beginner/images/)
- [HTML Images - W3Schools](https://www.w3schools.com/html/html_images.asp)
- [HTML Forms - HTML Dog](http://htmldog.com/guides/html/beginner/forms/)
- [HTML Forms - W3Schools](https://www.w3schools.com/html/html_forms.asp)

# 1. HTML Introduction

When a web browser displays a web page to a user, the browser needs to know three things:

1. What _content_ (text, images, video, etc.) is on the web page? What is the _structure_ of this content?
1. How should the content _appear_?
1. How should the page _behave_ in response to a user?

HTML stands for "Hyper Text Markup Language". It's a special way of writing that tells web browsers what text, images, and other content you want people to see on your website. HTML is responsible for (1), but HTML can also tell a browser a little bit about how the content should appear (2). It **cannot** tell a browser how a website should behave (3). That's what JavaScript is for!

HTML uses _tags_ inside angle brackets to tell the browser what type of information is inside (e.g `<h1>Heading</h1>` is a heading).

HTML is not a programming language. You can't write code in HTML, only give instructions about what information to display. You can, however, combine HTML and JavaScript to build websites that both show text, and allow for user interaction.

In this unit, we'll learn how to build static (unchanging) websites with HTML and how to integrate JavaScript to make our websites interactive.

# 2. Edit HTML in the wild

HTML is all around us. Let's explore an example from a real website online.

While many websites use more complicated tools, [Craigslist](https://newyork.craigslist.org/) is a major website that primarily uses HTML to format and display text.

To look at the HTML that's powering this website, right click on "new york city" and click "inspect".

![Inspector open on Craigslist.](./assets/craigslist-inspect.png)

On the right side, you can see the HTML. Now that you can see the inner workings, you can edit it. Delete the text that says "new york city" and replace it with some other text. Then click enter.

![Inspector open on Craigslist, with text having been edited.](./assets/craigslist-edit.png)

Neat! Now try a few more on your own.

- Change the text that says "about"
- Change the text that says "community"
- Change the text that says "S" in the calendar
- Change the text that reads "search craigslist"
- Change the text that says "create a posting" (BONUS, make that link go somewhere else)

# 3. HTML Introduction

Now that we see what HTML is used for, let's go over how to write our own websites.

- Create a folder in your sandbox called `html_intro`
- Create a file inside that folder called `helloWorld.html`
- Open the directory in vscode with `code .`

The basic setup of HTML looks like this:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>My Title</title>
  </head>
  <body>
    <!-- Your website text goes here -->
  </body>
</html>
```

- `<!DOCTYPE html>` is a special declaration that we put at the top to say which version of HTML we're using. By default, not we are using HTML 5. If we wanted to write using an older version, we'd change this declaration here.
- The rest of our website is enclosed in these `<html> </html>` tags. <html> means that everything below is html, up until we hit the `</html>` tag.
- `<head>` means that everything up until the `</head>` tag is part of the website's metadata. Metadata means information about the website, but not something that we show to users. This includes stuff like the language the page is in, and the image/text that shows up when you post a link in slack.
- `<body>` means that everything up until the `</body>` tag is part of the main content. Users will see all of the text and tags here.
- We write comments in HTML using the `<!-- -->` syntax. Users won't be able to see anything in between the `<!--` and `-->`

Let's add some text to our website and take a look!

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>My Title</title>
  </head>
  <body>
    Hello World!
  </body>
</html>
```

You can now open this file with your web browser:

```
$ open helloWorld.html
```

# 4. HTML: Paragraphs

We just made our first website! Not a lot of content there yet though, so let's add some.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>My Title</title>
  </head>
  <body>
    Hello World!

    This is my website.
    I hope that you enjoy it!

    Email me if you want me to build you a website.
  </body>
</html>
```

![A single line of HTML on the page.](./assets/html-one-ling.png)

When we view our website in a browser, all the text is there, but it's only on one line. HTML doesn't respect new lines that you add manually in the `<body>`. In fact, HTML ignores all "whitespace", similar to how javascript doesn't care whether you write stuff on one line or multiple.

In order to tell the browser how to display your website, you'll need to use more HTML tags.

The `<p>` tag stands for paragraph and is used for telling the browser that everything between the `<p>` and `</p>` tags should be its own block.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>My Title</title>
  </head>
  <body>
    <p>Hello World!</p>
    <p>This is my website.</p>
    <p>I hope that you enjoy it!</p>
    <p>Email me if you want me to build you a website.</p>
  </body>
</html>
```

![Multiple paragraphs on a page.](./assets/html-paragraphs.png)

# 5. HTML: Headings

Our website above has the text separated out, but doesn't have a way to differentiate sections. Using the `<h1>` tag, we can create a _heading_ that has larger text.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>My Title</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my website.</p>
    <p>I hope that you enjoy it!</p>
    <h2>Website Building</h2>
    <p>Email me if you want me to build you a website.</p>
  </body>
</html>
```

> Take 2 minutes and add an `<h3>` and a few sentences about whatever you like! Write about donuts, video games, or how much you miss sports.

![HTML headers on a page with paragraphs.](./assets/html-header.png)

In HTML there are six different types of headings, h1 to h6, with h1 having the largest default font size/line spacing and h6 having the smallest default font size/line spacing. Typically heading tags are used for titles and subtitles on a page, with large bold fonts.

# 6. Styling Tags

Other tags that can be useful for style and emphasis are the `<strong>` and `<em>` (for emphasis) tags. `<strong>` tags, by default, make a text **bold**; `<em>` tags, by default, make text _italic_. If we wanted text to be bold or italic, we would just wrap that text in a `strong` or `em` tag _inside_ our `p` or `h` tags. Let's add some to our HTML and see what happens:

```html
<h1>This is my first web page.</h1>
<p>How <em>exciting</em>!</p>
<p><strong>Isn't it?</strong></p>
```

> You do: Take 2 minutes and add emphasis and bolding to several words of your choice. Experiment putting the tags inside and outside the existing `<p>` tags.

# 7. HTML tags: Lists

## List Tags

It is not uncommon to see bulleted lists of information or numbered lists on the web, but how do we create those? Using what we've seen, we could try the following:

```html
<h1>This is my first web page.</h1>
<p>How <em>exciting</em>!</p>
<p><strong>Isn't it?</strong></p>

<h2>Let's make a list!</h2>
<p>1. First item!</p>
<p>2. Second item!</p>
<p>3. Third item!</p>
```

It looks pretty much like a list but now imagine we want add ten more items but then want to delete this first item. Now we have to manually change _every_ number because the second bullet would now become the first. List tags resolve this issue.

### Ordered List Tags

To solve the problem we've created above we are going to implement an _ordered list_ which is a numbered list. Ordered lists are great because we don't need to keep track of what number each bullet is--they are automatically incremented. To create an ordered list we first use the `<ol>` tag and then put our list items `<li>` inside that.

Let's change our list to be an actual ordered list:

```html
<ol>
  <li>First item!</li>
  <li>Second item!</li>
  <li>Third item!</li>
</ol>
```

If we save and reload, we can see that the list looks much nicer! The content is indented and the large space between each line is removed. Now if we add a fourth item and remove the first, the list updates accordingly and we don't have to worry about changing any numbers.

### Unordered List Tags

An _unordered list_ works in the same way that an ordered list does except now it uses standard bullets in place of numbers. To make our list unordered, we change our `<ol>` tags to `<ul>` tags.

```html
<ul>
  <li>First item!</li>
  <li>Second item!</li>
  <li>Third item!</li>
</ul>
```

Now our list's numbers have been replaced by bullet points creating an unordered list.

> Take 3 minutes and add two kinds of lists: One unordered and one ordered. For your unordered list, put any 3 colors you can think of. For the ordered list, put your favorite 3 people, alive or dead.

In both cases, the _entire_ list of items is wrapped in either an ordered or unordered list tag. This means that you **cannot** mix bullets and numbers in one list.
You can, however, make a sub-list that is different from the main list. In the example below, the ordered sub-list will be indented further than the unordered main list.

```html
<ul>
  <li>First item!</li>
  <li>Second item!</li>
  <ol>
    <li>This is ordered</li>
    <li>So is this!</li>
  </ol>
  <li>Third item!</li>
</ul>
```

# 8. HTML tags: Links

Remember how we said _HyperText_ means that disparate web pages on the internet can connect to one another? That's one of the most important parts of the web as we know it, so **links** are pretty important HTML tags! Without them, it just wouldn't be HTML.

A link tag is very similar to the tags we've been working with except this tag accepts an _attribute_ that points to the link's destination. Every `a` tag includes an `href` attribute that accepts a URL where the link goes to. To add an attribute to an HTML tag, you put it **inside** the opening tag like so:

```html
<h2>Links</h2>
<a href="https://www.google.com">Link text</a>
```

This link would direct the user to Google when they click it.

Note that if we made our link `www.google.com` or `google.com` it _WOULD NOT_ work! It would try to go to a location on your computer. You need to include the `https://` because that tells the browser you are looking for an **outside** page on the Web--not on your computer.

We normally don't have to type all that into the browser because the browser has been designed to assume you meant to include the `https://`.

> Take 3 minutes and add various links. See what happens if you leave `https://` off. Also try starting your links with `/` instead of `https://`

# 9. HTML tags: Images

Image tags are used for embedding an image into our HTML page. Any page that has an image on it is using an **image tag**. An image tag is represented by `<img>` and similar to our `a` tags above, image tags accept attributes.

With image tags, they need to be given a URL that points to the location of the image. This can be a URL from the internet or a location on your computer.

> Note: it's best practice to not link to files on your computer, because when we start publishing our websites onto the internet, the images won't load. Links should generally always point to a website URL.

The `src` (like _source_) attribute is what points to the image URL and the `alt` (like _alternate_) attribute is text that appears if the link is broken or the image cannot load.
You should include _both_ for every `img` tag you use just to be safe (and also accessible).

The `img` tag is also unique because the opening tag can close itself like so: `<img />`. While you can use the standard format (`<img></img>`), you'll find it is much easier to just type `<img/>`.

```html
<h2>Images</h2>
<img
  src="http://www.readersdigest.ca/wp-content/uploads/2013/03/6-facts-to-know-before-owning-a-puppy.jpg"
  alt="Puppy!"
/>
```

Aw cute! But wow that picture is _huge_! Luckily the `img` tag also accepts `width` and `height` attributes. In later lessons, we'll learn how to use CSS to format our images in a much better way, but for now using the `width` and `height` attributes will do the job! By setting our `width` and `height` to `300`, we are actually setting them both equal to 300 pixels in height and width. Writing style attributes directly into the HTML is called inline markup. This is generally bad practice; later we will learn cleaner ways to style our HTML.

```html
<h2>Images</h2>
<img
  src="http://www.readersdigest.ca/wp-content/uploads/2013/03/6-facts-to-know-before-owning-a-puppy.jpg"
  alt="Puppy!"
  width="300"
  height="300"
/>
```

Yay! But it looks a little... _off_. This is because we specified a height and width **without** respect to the ratio of the photo. To solve this problem, just modify either the height _or_ the width--not both. If we just set the width to 300, its height will fill automatically.

```html
<h2>Images</h2>
<img
  src="http://www.readersdigest.ca/wp-content/uploads/2013/03/6-facts-to-know-before-owning-a-puppy.jpg"
  alt="Puppy!"
  width="300"
/>
```

Much better!

> Take a few minutes and add some more images using our favorite placeholder site: [fillmurray](https://www.fillmurray.com)
