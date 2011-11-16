Backbone Eventdata
==================

This small backbone plugin allows you to pass eventData to your actions. This is reached while providing a convenience syntax extension to _Backbone.View.prototype.events_.

```javascript
events: {
  "namespace:eventName[eventData] sizzleSelector": "anAction", //in general
  "menu:doubleclick[newWindow] a.menu": "navigateTo", //eg. for menues
  "keydown[ctrl+a]": "selectAll", //eg. for jquery.hotkeys by jeresig
  }
```

how do I use it?
----------------

Include backbone.eventdata.js into your project *after* Backbone.

how does it work?
-----------------