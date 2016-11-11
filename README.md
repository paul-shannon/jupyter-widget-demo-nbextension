# A simple jupyter widget, presented as a notebook extension: interactive d3 circle drawing

After learning some of the basics of jupyter widget programming, as described
[here](https://github.com/paul-shannon/jupyter-widget-demo-all-in-notebook) 
I next turned to, and present here, the same
simple d3 widget as a jupyter notebook extension.  In that form it can be
downloaded, installed, and used in any notebook, with all the implementing
code hidden from view.

This constitutes a big leap in complexity.  Rather than 1 file, there are more than 30.
Multiple software libraries and tools are explicilty involved: require, underscore, 
webpack, npm.  There are multiple configuration files.  It is easy to
miss a crucial detail.  I try to identify all the steps below.

