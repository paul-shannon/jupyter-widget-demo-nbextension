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

## Clone, Build, Install, Run
<code>
git clone https://github.com/paul-shannon/jupyter-widget-demo-nbextension.git
make
</code>


## Cookiecutter configuration
The complex and mostly undocumented structure of a nbextension directory is made up for, in part,
by the provision of a cookiecutter template.  As it installs, it asks the following questions,
and configures many parts of the project accordingly.

<ul>
    <li> author_name []: Paul Shannon
    <li> author_email []: pshannon@systemsbiology.org
    <li> github_project_name [jupyter-widget-example]: jupyter-d3-circles-widget
    <li> github_organization_name [jupyter]: 
    <li> python_package_name [ipywidgetexample]: circles
    <li> npm_package_name [jupyter-widget-example]: circles-pkg
    <li> project_short_description [A Custom Jupyter Widget Library]: 
</ul>

## Directories and Files

<ul>
  <li> MANIFEST.in:  used by python setup.py to create the MANIFEST used in the installable python egg
  <li> README.md:    this file
  <li> RELEASE.md:    how to publish this package on PyPI
  <li> circles.ipynb:  demonstration notebook
  <li> makefile:       specifies all steps in order for building, installing and using this widget
  <li> setup.cfg:      more info for setup.py
  <li> setup.py:       creates the python egg (installable) version of this extension (module + browse code)
  <li> circles         the python module directory
      <ul>
         <li> Circles.py:  the python representation of, and interface to, the Circles widget module
         <li> __init__.py:  specifies the instantiation of a Circles object
         <li> _version.py:  version information
        <li> static
          <ul>
            <li> extension.js
            <li> index.js
           <li> index.js.map
           </ul>
     </ul>
<li> js
   <ul>
     <li> node_modules: directory for all the supporting javascript libraries (d3, underscore, jupyter-js-widgets, webpack, ...)
     <li> package.json: specifies the node modules needed, in which versions
     <li> webpack.config.js: tells webpack how to create bundles of javascript from all the constituent code.
     <li> dist: webpack writes the bundles here
       <ul>
         <li> index.js:  all the constituent javascript code, combined
         <li> index.js.map: index.js, condenssed ton one line, perhaps otherwise augmented?
</ul>
   <li> src
     <ul>
       <li> Circles.js: The custom javascript, uses d3, subclasses standar juypter browser classes
       <li> embed.js:   Exports the Circles widgets models and views into the jupyter namespace
       <li> extension.js: configures requirejs, specifies the installed paths for participating libraries.
       <li> index.js: looks a lot like embed.js
      </ul>
   </ul>
  </ul>
