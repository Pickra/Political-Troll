State = Backbone.Model.extend({
	
})


Member = Backbone.Model.extend({
	initialize: function(){
		console.log('Member model', this);
	},
})

Bill = Backbone.Model.extend({
	initialize: function(){
		console.log('Bill model, ', this);
	}
})