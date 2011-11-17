//= require backbone

(function(){
	// Cached regex to split keys for `delegate`.
	var eventSplitter = /^([^\s\[\]]+)(\[([^\[\]]+)\])?\s*(.*)$/;

	// Set up all inheritable **Backbone.View** properties and methods.
	_.extend(Backbone.View.prototype, {
		delegateEvents : function(events) {
			if (!(events || (events = this.events))) return;
			if (_.isFunction(events)) events = events.call(this);
			$(this.el).unbind('.delegateEvents' + this.cid);
			for (var key in events) {
				var method = this[events[key]];
				if (!method) throw new Error('Event "' + events[key] + '" does not exist');
				var match = key.match(eventSplitter);
				var eventName = match[1], eventData = match[3], selector = match[4];
				method = _.bind(method, this);
				eventName += '.delegateEvents' + this.cid;
				if (selector === '') {
					$(this.el).bind(eventName, eventData, method);
				} else {
					$(this.el).delegate(selector, eventName, eventData, method);
				}
			}
		}
	});
})();
