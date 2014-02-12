<!-- TITLE/ -->

# DocPad Moment Plugin

<!-- TITLE/ -->

<!-- BADGES/ -->

[![Build Status](http://img.shields.io/travis-ci/brockfanning/docpad-plugin-moment.png?branch=master)](http://travis-ci.org/brockfanning/docpad-plugin-moment "Check this project's build status on TravisCI")
[![NPM version](http://badge.fury.io/js/docpad-plugin-moment.png)](https://npmjs.org/package/docpad-plugin-moment "View this project on NPM")
[![Dependency Status](https://david-dm.org/brockfanning/docpad-plugin-moment.png?theme=shields.io)](https://david-dm.org/brockfanning/docpad-plugin-moment)
[![Development Dependency Status](https://david-dm.org/brockfanning/docpad-plugin-moment/dev-status.png?theme=shields.io)](https://david-dm.org/brockfanning/docpad-plugin-moment#info=devDependencies)<br/>


<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Adds support for date formatting with Moment.js

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

## Install

### [Node](http://nodejs.org/)
- Use: `require('docpad-plugin-moment')`
- Install: `npm install --save docpad-plugin-moment`

<!-- /INSTALL -->


## Usage

Configure some formats in your `docpad.coffee`:
```coffee
plugins:
  moment:
    formats: [
      {raw: 'date', format: 'MMMM Do YYYY', formatted: 'humanDate'}
      {raw: 'date', format: 'YYYY-MM-DD', formatted: 'computerDate'}
    ]
```

* raw = the name of the existing attribute in your content
* format = the format you want it changed to
* formatted = a name for the new version

Then, in your template, instead of:
```eco
<span>Posted on <%- @date %></span>
```

You would do:
```eco
<span>Posted on <%- @humanDate %></span>
```

## General use

To do anything else that the Moment.js library allows, you can access Moment using the `@moment()` helper. For example,

``` eco
<span><%= @moment('2013-10-13').format('MMMM Do YYYY') %></span>
```
...would output...
``` html
<span>October 13th 2013</span>
```

<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/brockfanning/docpad-plugin-moment/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/brockfanning/docpad-plugin-moment/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Brock Fanning <brockfanning@gmail.com> (http://brockfanning.com)

### Sponsors

No sponsors yet! Will you be the first?



### Contributors

These amazing people have contributed code to this project:

- [brockfanning](https://github.com/brockfanning) — [view contributions](https://github.com/brockfanning/docpad-plugin-moment/commits?author=brockfanning)

[Become a contributor!](https://github.com/brockfanning/docpad-plugin-moment/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; 2013+ Brock Fanning <brockfanning@gmail.com> (http://brockfanning.com)

<!-- /LICENSE -->


