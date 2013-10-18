ViewA = Backbone.View.extend({
	template:_.template($('view-A-template').text()),
	tagName: 'div',
	
	classname: 'viewA',

	events:{
		'click .button'   :   'getRepresentative'
	},

	initialize: function(){
		$('.main').append(this.el)
		this.render()
	},

	render: function(){
		this.$el.append(this.template())
	}, 

	getRepresentative: function(){
		// sends a query to the server based on the input value
		// .get input.val()
	}
})