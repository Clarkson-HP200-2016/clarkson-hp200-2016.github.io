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
Add the following under the ```<ul>``` tag
```html
<li><a href="#my_id">My Name</a></li>
```

Timeline
--------



