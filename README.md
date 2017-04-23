Zenda Farms Website Documentation
=================================

Documentation for how to modify the webpage.

Usage
=====

Setup your webservice and serve the file index.html to the client, along with
any other files you may need. Additonally, make sure to serve any other files that may be requested: scripts, images, and styles.

Layout
======

Navbar
------

To add an extra link in the navbar find the following section of code
```html
<div class="collapse navbar-collapse" id="custom-collapse">
	<ul class="nav navbar-nav navbar-right">
		<li><a href="#aboutus">About</a></li>
		<li><a href="#programs">Programs</a></li>
		<li><a href="#meetus">Staff</a></li>
		<li><a href="#testimonials">Stories</a></li>
		<li><a href="#contact">Contact</a></li>
	</ul>
</div>
```
Add the following under the `<ul>` tag
```html
<li><a href="#my_id">My Name</a></li>
```

Timeline
--------

To add a new entry for the time line look for the tags
```html
<div class="timeline">
	<ul>
```

Insert the following code where appropriate
```html
<li class="view-animate">
	<div class="timeline-entry">
		<span class="time-date">Example 20XX</span>
		<p>
			My text
		</p>
	</div>
</li>
```

Programs
--------

This bit is a bit more complicated as there is two components, the card and the modal.
First we'll add the card. Look for the section of code
TODO


Testimonials
------------

To add a new testimonial there are two sections of code to add: the carousel indicator and the quotation itself.

### Carousel Indicator

Look for the following section of code
```html
<div id="stories" class="carousel slide">
	<ol class="carousel-indicators">
		<li data-target="#stories" data-slide-to="0"></li>
		<li data-target="#stories" data-slide-to="1" class="active"></li>
	</ol>
```

In the ordered list insert the following code
```html
<li data-target="#stories" data-slide-to="n+1"></li>
```
where $n$ is the number of elements in the list before insertion. Additionally, the clas `active` denotes which carousel item is initially active

### Carousel Items

To add a new carsouel item look for the following div tag, `<div class="carousel-inner">`. Inside the tag add the following code
```html
<div class="item">
	<div class="profile-circle" style="background-image: url('path-to-img')"></div>
	<blockquote>
		<p>
			Quotation
		</p>
	</blockquote>
	<div class="author">
		- Name
	</div>
</div>
```

Gallery
-------
