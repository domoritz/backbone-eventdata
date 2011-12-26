Backbone Eventdata
==================

This small backbone plugin allows you to pass eventData to your actions. This is reached while providing a convenience syntax extension to _Backbone.View.prototype.events_.

```javascript
events: {
  
  //in general
  "namespace:eventName[eventData] sizzleSelector": "anAction",
  
  //blanks are all right!
  //e.g. for menues
  "doubleclick[new Window] a.menu": "navigateTo",
  
  //e.g. for jquery.hotkeys by jeresig
  "keydown[ctrl+a]": "selectAll",
  
  //just one action for that much links
	"click[1]   .turn_1_page_right":    "turnPage",
	"click[5]   .turn_5_pages_right":   "turnPage",
	"click[20]  .turn_20_pages_right":  "turnPage",
	"click[-1]  .turn_1_page_left":     "turnPage",
	"click[-5]  .turn_5_pages_left":    "turnPage",
	"click[-20] .turn_20_pages_left":   "turnPage",

  }
```

how do I use it?
----------------
1. Include backbone.eventdata.js into your project __after__ Backbone.
1. evaluate event.data in your callback
1. add eventdata in brackets to your eventbindings (directly after the events name)

how does it work?
-----------------
This script overloads _Backbone.View.prototype.delegateEvents_ and adds basically just a few statements to it.

example
-------
```javascript
view = new Backbone.View({
  
  events: {
    //on doubleclick call something like navigateTo({data:"newWindow", ...})
    "doubleclick[new Window] a.menu": "navigateTo",
  },
  
  navigateTo: function(event, ui){
    if(event && event.data == "new Window")
      //the magic happens!
      this.openWindow();
    else
      this.doOtherMagic();
  }
    
  openWindow: function(){
    //...
    }
  }
});
