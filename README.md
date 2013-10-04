# DocPad Moment Plugin
Use the Moment module to format specified dates.

## Getting Started

```
npm install --save docpad-plugin-moment
```

Configure some formats in your `docpad.coffee`:
```coffee
plugins:
  moment:
    formats: [
      raw: 'date', format: 'MMMM Do YYYY', formatted: 'humanDate',
      raw: 'date', format: 'YYYY-MM-DD', formatted: 'computerDate'
    ]
```

Raw = the name of the existing attribute in your content
Format = the format you want it changed to
Formatted = a name for the new version

Then, in your template, instead of:
```eco
<span>Posted on <%- @date %></span>
```

You would do:
```eco
<span>Posted on <%- @humanDate %></span>
```

## Future

* Provide a generic templateHelper for on-the-fly formatting
* Maybe incorporate some of the other functionality of Moment.js?