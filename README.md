# Test page

This is a demo page component based the [koco generator](https://github.com/cbcrc/generator-koco) conventions. It has no purpose other than demoing an external bower component.

## Installation

```bash
bower install koco-demo-page
```

## Registering the page

This component could be registered as a normal [knockout component](http://knockoutjs.com/documentation/component-binding.html), but if you are using the [knockout-router](https://github.com/cbcrc/knockout-router) it would be like this:

```javascript
var router = require('knockout-router');

// Register the page.
router.registerPage('koco-demo-page', {
    isBower: true
});

// Add a route that will answer to /test or /#/test if you are using hashes.
router.addRoute('test', {
    title: 'Test page',
    pageName: 'koco-demo-page' // must match the component's name registered earlier.
});
```
