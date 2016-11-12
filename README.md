# A simple jupyter widget, presented as a notebook extension: interactive d3 circle drawing

<img src="https://github.com/paul-shannon/jupyter-widget-demo-nbextension/blob/master/circles.png"/>

After learning some of the basics of jupyter widget programming &mdash; as described
in this [repo](https://github.com/paul-shannon/jupyter-widget-demo-all-in-notebook) 
 &mdash; I next turned to, and present here, the same
simple d3 widget, but this time as a jupyter notebook extension rather than as an all-in-one
jupyter notebook.  As an extension, this can be
downloaded, built, installed, and used in any notebook, with all the implementing
code hidden from view.

This constitutes a big leap in complexity.  Rather than 1 file, there are more than 30.
Multiple software libraries and tools are explicilty involved: require, underscore, 
webpack, npm.  There are multiple configuration files.  It is easy to
miss a crucial detail.  I try to identify all the steps below.

## Directories and Files

<ul>
  <li> MANIFEST.in
  <li> README.md
  <li> RELEASE.md
  <li> circles.ipynb
  <li> makefile
  <li> setup.cfg
  <li> setup.py
  <li> circles
      <ul>
         <li> Circles.py
         <li> __init__.py
         <li> _version.py
        <li> static
          <ul>
            <li> extension.js
            <li> index.js
           <li> index.js.map
           </ul>
     </ul>
<li> js
   <ul>
     <li> node_modules
     <li> package.json
     <li> webpack.config.js
     <li> dist
       <ul>
         <li> index.js
         <li> index.js.map
      </ul>
   <li> src
     <ul>
       <li> Circles.js
       <li> embed.js
       <li> extension.js
       <li> index.js
      </ul>
   </ul>
  </ul>
