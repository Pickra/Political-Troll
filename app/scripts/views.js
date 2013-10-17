ViewA = Backbone.View.extend({
	template:_.template($('view-A-template').text()),
	tagName: 'div',
	
	classname: 'viewA',

	initialize: function(){
		$('.main').append(this.el)
		this.render()
	},

	render: function(){
		this.$el.append(this.template())
	}, 

	events:{
		'click button'   :   'button'
	},

	button: function(){
		// sends a query to the server based on the input value
		// .get input.val()
	}
})