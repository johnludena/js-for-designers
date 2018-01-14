---

layout:			default
title:  		'Design in The Browser With This ONE Line of Javascript' 
permalink: 		/design-in-the-browser/
type:			post
navigation: 	false

date:   		2017-10-18
excerpt: 		Learn how to design in the browser with this simple Javascript hack that will turn your browser into a live WYSIWYG editor.
categories:		guides
gradient: 		2
image: 			header-1.jpg
details:		false

author: 		John Ludena
bio: 			Front-end developer passionate about great design and building better user-interfaces.

---


Don’t you wish that you could design right on the browser sometimes?

I mean, using Photoshop or Sketch for designing user interfaces is great for certain situations — like creating certain UI elements like icons for example — but when it comes to the doing the bulk of the work, the process is incredibly inefficient.

Just think about the possibilities of designing directly in the browser for a second:

* You wouldn't have to spend so much time making a small code change, refreshing the page, seeing if everything looks OK (most likely it doesn't), and then repeating the process over and over and *over* again.
*  Instantly see how your new design changes would affect your site's responsiveness at different screen sizes by simply resizing your browser window
* You could whip up revised mockups in seconds by just making changes right on the page, taking a screen capture, and then sending them off for client approval (instead of spend 30 minutes wrestling with your layers).

Well, there *is* a simple Javascript property that will **turn your browser into a live WYSIWYG editor**. And best of all, it doesn't require a monthly membership required to do it.

Today, I'll show you all about this little-known Javascript hack that could prove to be a valuable new tool in your design arsenal.

## The magic of 'contentEditable'

Just like you can add an inline `style` property to any HTML element, you can also add a little property called `contentEditable` to any tag on your document and turn that element into a live text editor for your user.

{% highlight html %}
<p contentEditable="true">This is a paragraph that can be edited by the user.</p>
{% endhighlight %}

This can open up a wide range of interesting possibilities during the UI/UX development phase – not to mention – help you visualize EXACTLY what a revised design change would look like *before* having to make the change in the source code.


## Seeing is believing

Let's take a look at how exactly this happens with a simple example. In the CodePen below, I have three elements:

* The first one is just a normal `div` with a paragraph tag
* The second one has the `contentEditable` property on the parent `div` tag already, making my paragraph editable by the user as soon as the page loads
* The third one *starts out* as a normal `div` with a paragraph, but has a button which will add the `contentEditable` property to its parent `div` on click – turning that fixed element into a UI element the user can manipulate.

{% include pens/contenteditable.html caption="Live example of ‘contentEditable’ in action" %}


## The contentEditable hack for UI/UX designers
In our case, we'll make use of this handy property to apply the contentEditable property to our `body` tag, therefore turning *the entire web page* it into a visual editor... right inside the browser!

I'll be using Chrome in this example, but this works on all modern browsers. The steps are simple:

1. Open your developer tools and access the browser's built-in console (all browsers have this). Sometimes they are under a 'View' menu or in the 'Settings.' In Chrome, this is inside the main settings accessed by clicking the three dots icons, and then going to 'More Tools' and then 'Developer Tools.'
2. Switch to your "Console" tab in the new window that pops up.
3. Type in the following command in the console: `document.body.contentEditable = true`


{% include media-youtube.html file="https://www.youtube.com/watch?v=CnjRqgSkV9s" caption="The magic of ‘contentEditable’ in action" %}

As you can see in the video above, I can now CLICK on any element on my browser window, and EDIT it on the spot!

How cool is that?

Now, of course, this changes are not being made to the original source code. What we are doing is just manipulating the browser's DOM (the picture that the browser "paints" using our original source code, but not the original source code itself).

What this means is that all these edits will go away when you hit the "Refresh" button because the picture will get re-painted at that time.


## Conclusion
By being able to edit things right on your browser, you can quickly test how your design and layout would change by altering a certain headline or call-to-action — particularly the responsiveness and flow of the entire page — without ever having to fire up your code editor.

In other words: No more guessing if that new design change is going to break your current pixel-perfect layout. Simply turn on `contentEditable` and type it in. Happy with how it looks? Make the code change at that point.

Or you can also take a full page screenshot and either send it to your client for approval, or to your dev team to make the necessary changes in the source code at that point (I recommend using the [FireShot](https://www.getfireshot.com) extension for Chrome to take a complete screenshot. It’s super handy!).

Hope you found this technique useful. Subscribe below to receive more articles like this one straight to your inbox.


{% include subscribe.html %}













