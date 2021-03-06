webapp-setup
============

Basic setup for simple to advanced website build (Sass and bootstrap).


<h2>Getting Started</h2>

This is basic webapp setup repo. You just need to download this to your machine or using terminal,

<ul>
<pre>git clone https://github.com/inanosp/webapp-setup.git</pre>
</ul>

<li><h2>Installing Bower:</h2></li>

Bower can be installed using <a href="https://npmjs.org/" target="_blank">npm</a>, the Node package manager. If you don’t already have npm installed, head over to the <a href="http://nodejs.org/" target="_blank">Node.js website</a> and download the relevant copy of Node.js for your system. The npm program is included with the install of Node.js.

Once you have npm installed, open up Terminal (or Command Prompt) and enter the following command:<br>

<pre>npm install -g bower</pre>

This will install Bower globally on your system.

<li><h2>Installing Grunt CLI:</h2></li>

Now install Grunt's command line interface (CLI) globally. You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

<pre>npm install -g grunt-cli</pre>

This will put the grunt command in your system path, allowing it to be run from any directory.

<h2>Install dependencies/modules Using bower and npm</h2>

Now that you have Bower installed, we can start looking at the commands that are used to manage packages.
All dependencies/modules are predefined in <strong>Gruntfile.js</strong>.

<pre>bower install && npm install</pre>

This is what your project will look like once you've installed all packages using bower and npm.
<img src="https://lh4.googleusercontent.com/-A22RswAgaO8/VJbgKmZp6hI/AAAAAAAABgs/EGt7-dS-rno/w202-h614-no/structure.png" width="250" height="835" alt="FOLDER STRUCTURE"></img>

<h2>License</h2>
<a href="http://en.wikipedia.org/wiki/MIT_License" target="_blank"> MIT License</a>

<h2>Made By...</h2>
<a href="https://twitter.com/santuparashetti" target="_blank">@santuparashetti</a> at <a href="http://santup.github.io/" target="_blank">santup.github.io</a> 

