---

layout:			default
title:  		'Mailchimp and AJAX: A How-to Guide for Remarkable UX and Higher Conversions' 
permalink: 		/mailchimp-ajax/
type:			post
navigation: 	false

date:   		2017-08-10
excerpt: 		Unleash the true power of Mailchimp with AJAX! Find out more about the Javascript code that will upgrade your UX and boost email signup conversions.
categories:		guides
gradient: 		5
image: 			mailchimp-ajax/featured-image.jpg
details:		false

author: 		John Ludena
bio: 			Front-end developer passionate about great design and building better user-interfaces.

---


If you've ever built a MailChimp list, you know their default forms could use *just* a bit of improvement when it comes to their UI/UX.

Now please don't get me wrong. I love MailChimp. After all, it's the perfect email service for startups and even solo-preneurs who are just getting started building a list.

Why you ask? Well, here's a few reasons:

* It's a rock-solid email platform
* It's free up to 2000 subscribers
* It's perfect for designers and developers who want complete control over the look and feel of their signup forms using CSS

Even better news: **As of October 31st, 2017, MailChimp has FINALLY dropped their mandatory double opt-ins so users don't have to annoyingly confirm their subscription via email.** Which is a *huge* win in terms of reducing the friction of the entire signup process and getting people on an email list faster.

So, what's not to like?

Well, for one, MailChimp's default styles looks good enough, but if you REALLY want to make MailChimp fit your website's brand, you'll need to use their "Naked" forms without any CSS or JS files included.

**Which means you lose the key ability to use an AJAX request after sending the user's information, and your user will be re-directed to another page after hitting the "Subscribe" button.** This not only gives your users a sub-par experience, but it could even be affecting your signup conversion rates!

Today, I'll help you solve this problem.

I'll show you step-by-step how easy it is to take a "Naked" MailChimp form and leverage the necessary Javascript to use an AJAX request instead of MailChimp's external signup flow. 

We'll also add some CSS for a nice visual cue at the end of the signup process to let the user know their requested has been completed successfully.

Here's a little sneak peek of our final product:

{% include media-image.html file="mailchimp-ajax/demo-animation.gif" class="original-size" %}


## AJAX? That's a house cleaner, right?

No.

Well, OK. It is.

But it's also a Javascript method that allows the browser to exchange data with a server and update ONLY a section of a web page, instead of refreshing the whole entire page. This means that AJAX gives any website or app some KEY benefits:

* **Speed:** Not having to reload an entire page will make your site seem more responsive by not having to request additional files from a server (e.g. images/scripts/etc) for a new page.
* **User-friendliness:** Having a seamless transition after submitting data gives a user a baby-bottom smooth transition that allows them to happily keep browsing their current page.
* **Good UI/UX:** There is nothing more frustrating for a user than being kicked out to a new page when they weren't expecting it. 


## Fixing the problem with a little bit of style 

So now that we know WHY we are using AJAX to solve the problem, let's get to the HOW.

I'll not only provide you with the necessary code to make this work, I'll also break down all the key Javascript parts so even if you are a newcomer to Javascript who may only know HTML and CSS, you'll see that this is not as scary as it may sound.

We'll also use an animated checkmark after the user has signed up to make it 100% what their next steps should be. 

Why an animated visual cue? **Because motion creates emotion.** 

Animations (when properly used), add to user experience and polish of your website or app – increasing your visitor's overall trust in your product at the end of the day when you ask them to *take the action you want them to take*. Whether  that's trying your app, signing for your newsletter, or simply click that wonderful "Buy Now" button.

Quick side note: If you want to read more about *why* animations can be so effective, I suggest you check out [this great article](https://medium.com/bridge-collection/improve-the-payment-experience-with-animations-3d1b0a9b810e
) by the Stripe UI team.

Also, a big thank you to Adarsh Kp for the inspiration. I found [his animated GIF](https://dribbble.com/shots/3685020-Subscribe-UI-Interaction-Design) while browsing Dribble, and I thought it would make a great tutorial so I decided to turn it into code. I did have to make a couple of changes for the sake of responsiveness and overall markup practicality, but his initial vision is still there.

Here is a live CodePen demo of our working MailChimp AJAX form:

{% include pens/mailchimp-ajax-demo.html title="Shorcode Preview" caption="This is how each of the shortcodes look like — the ideal image width should be at least 796px by the way"  %}


## Step 1: Drop Your MailChimp code
Obviously, your very first step is to grab your MailChimp list's default HTML code under the 'Embedded Forms' page. In this case, we'll be grabbing the 'Naked' code so you can have complete control over the CSS styling and all Javascript.

{% include media-image.html file="mailchimp-ajax/naked-form.jpg" %}

## Step 2: Making small adjustments to the HTML and CSS
We won't cover any HTML or CSS in this tutorial, as that would take too long and distract from the main meat of this article, which is getting to the Javascript part. However, it's important to note that you'll need a few changes to the HTML in your form so you can get this to work:

* Add a `success-message` hidden div inside your main container that will later be revealed using Javascript after the user submits her email
* Add a `required` class for both inputs so you can use that particular class to validate the necessary `input` elements
* And most importantly of all: You'll need to make this small modification to your `form`'s url property. Please keep in mind that AJAX functionality will not work without this little hack.

[IMAGE HERE]

## Select your form element with Javascript
Your very first step when creating *any* type of interactivity between the user and an HTML element is to *select* that particular element with Javascript. This is you telling the browser: "OK, I'm ready to do *something* with this little guy right *here*."

We'll be using the jQuery library for creating this functional prototype – since its syntax is easier to read and understand for Javascript newcomers. 

One thing I want to make clear: There is definitely great power in learning vanilla Javascript, but starting with jQuery is like using bike training wheels when you are getting started: You'll get the feel for how things work and your transition in the future will be much easier when working with other modern frameworks (if you choose to go that route).

Place your jQuery file and right before the closing `</body>` tag. Then create a new .js file (this is where we'll place all our custom code) and link to it AFTER your jQuery file, since we'll be leveraging existing jQuery functions.

[SCREENSHOT OF JQUERY FILE]

In the case of jQuery, we use the `$` symbol to create a selection, followed by the CSS selector of the element that we want to do something with (such as an ID or class) inside a set of parenthesis.

That means that your first step is creating a jQuery selection (also referred to as a jQuery *object*) is using the current ID of our form. Since I left the original ID from our Mailchimp HTML code, the ID is '[CHANGE_ME]', so my code will look something like this:

	$("#mc-embedded-subscribe-form");

## The .submit() function

Our next step is to tell the browser to use jQuery's `.submit()` function and tie it to this element. This function will automatically start "listening" for a click on the submit button and then execute a series of steps inside.

This is called a function in Javascript. Think of it like a cooking recipe: All the lines that go inside your function are the steps the browser will follow when the user triggers the event (in our case, a button click).

	$("#mc-embedded-subscribe-form").submit(function(){
		// Your future recipe goes here
	});

## Validating inputs

There's a million ways to do this, but for our purposes, we'll keep it simple and just make sure the user has filled in SOMETHING before they are allowed to click the submit button. 

This simple validation works by simply checking to see if the Mailchimp inputs' value are empty. If so, the browser will show your 'error' div using Javascript. It'll also add an error class to both inputs, which will highlight each field with a red bottom border (since there's a special class for inputs with the 'error' class in our CSS). This is an added visual cue in addition to our super-bright red error text.

## Sending the user's data to Mailchimp-land

If both inputs have been filled, the rest of our code will run. You'll create a variable where you can store your form's input values, and then use jQuery's handy `serialize()` function to format it in a way that Mailchimp's servers understand how to receive it.

## The secret sauce: AJAX

Here is what powers this great UX for signups: the magic of AJAX by being able to refresh *just* our signup div section -- and NOT the entire page.

jQuery's AJAX function is called... `ajax()`. Easy, right? That's why I mentioned that jQuery has an easier syntax to wrap your head around (compared to writing **XMLHttpRequest** in vanilla Javascript).

All we need to do now is pass certain parameters to let the browser some key things it needs before it SENDS this information to Mailchimp's servers:

1. WHERE the information is going (MailChimp's URL)
2. WHAT the information is (i.e. our nicely formatted data stored in our 'NAME_HERE' variable)
3. WHICH type of call we are doing (in this case, it's a READ)
4. HOW to respond to the user once that process is done

[SCREENSHOT OF CODE WITH NODES POINTING TO EACH VARIABLE]

## Our animated success message

Yes! Almost there. Finally, the cherry on top. Once the request by Mailchimp has been received and the browser gets a notification about it, it will invoke our `done()` function. This is also known as a callback function (that'll be a topic for another day). For now, just think of a callback as a set of steps that don't run until something else has finished.

Our done() function is where we get to be creative and show a great UI/UX interaction as a visual cue to the user that their request was submitted.

Here, I'm hiding the original form and showing our `success-message` div, along with an SVG of an animated checkmark using CSS that gets triggered after adding an `active` class inside `done()` using another simple function: `addClass()`.

## What happens next?

If you've used MailChimp at all, you know the next step. Your user will receive an email asking to verify their subscription (also called a "double opt-in," and commonly used by email providers to prevent spam). Once they click "Confirm," their email will be added to your MailChimp list.

Voila! You have a new subscriber and you have made the web a better place. You go you!

## Conclusion

Using MailChimp and AJAX is really a no-brainer.

MailChimp is not only a top email provider, but it's also free; making it the perfect choice for solo-preneurs and startups that are just getting started building an email list.

But it's only when you use AJAX with your MailChimp forms that you are  truly taking your user-experience to the next level – and at the same time increasing your website's chances for higher conversions and increased revenues at the end of the day.

I know I may have skipped over a few lines of code to keep things on point and not make this article overly tedious and long, but I've made sure to include lots of comments throughout my CodePen example, so hopefully that will fill in those gaps if you are curious about anything in this example.

## Want to learn more about creating better UI/UX with Javascript?

I'm putting together a mailing list where I'll be sharing a lot more about building great UI/UX patterns with Javascript. Want in? Submit your email below and you'll be the first to hear when there's new content posted:

{% include subscribe.html %}



































