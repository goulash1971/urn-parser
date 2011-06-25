urn-parser - Module for URN parsing
==========

### Overview

URN-Parser is a module that provides functions for parsing URN (Uniform Resource Name) that is loosly 
based upon the standard `url` module within `node`.  Parsing is derived from the **excellent** `parseUri` 
function by [Steven Levithan](http://stevenlevithan.com), but stripped down for the `urn` scheme.

Although the URN-parser is a *good start*, for a more complete and fully compliant implemnentation 
I recommend you take a look at the [URI Type for javascript](https://github.com/webr3/URI) module which
allows the `urn` to be inspected as an `uri`.

#### What's an URN?

The best place to start if you want to know more about URNs is (of course) the wikipedia article on
[Uniform Resource Name](http://en.wikipedia.org/wiki/Uniform_Resource_Name).

### Installation
	npm install urn-parser

### Using the Module
The 'urn-parser' module is accessed in the standard way by calling `require("urn-parser");` and once loaded 
you have access to the following objects and functions.

#### Class `urn-parser.Parser`
The `Parser` class is a wrapper object class that provides access to an object that can be 
used to parse `urn` instances.

This class has the following interface:

##### Constructor `Parser(options)`
Creates a new instance with the specified options

##### Method `Parser.parse(urnStr, strictMode)`
Parses an URN into components (optionally in *strict* mode)

##### Method `Parser.complete(obj)`
Creates a *complete* URN definition from its components

##### Method `Parser.format(obj)`
Formats an URN definition into a well-formed URN string

#### Function `urn-parser.parse`
The `parse` function is a proxy to the `Parser.parse(uriStrm, strictMode)` method on a singleton `Parser`
instance that is created for the module.

#### Function `urn-parser.complete`
The `complete` function is a proxy to the `Parser.complete(obj)` method on a singleton `Parser`
instance that is created for the module.

#### Function `urn-parser.format`
The `format` function is a proxy to the `Parser.format(obj)` method on a singleton `Parser`
instance that is created for the module.

### Contributors
- [Stuart Hudson](https://github.com/goulash1971)

### License
MIT License

### Acknowledgements
- [Steven Levithan](http://stevenlevithan.com) for the `parseUri` function that is the basis of this module

---
### Author
Stuart Hudson		 

