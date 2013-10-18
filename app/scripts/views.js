ViewA = Backbone.View.extend({
	template:_.template($('view-A-template').text()),
	
	tagName: 'div',
	
	classname: 'viewA',

	events:{
		'click .button'   :   'getPolitician'
	},

	initialize: function(){
		$('.views').html('');
		$('.views').append(this.el);/*unnecessary here...*/
		this.render()
	},

	render: function(){
		this.$el.append(this.template()) /*and here?*/
	}, 

	getPolitician: function(){
		// sends a query to the server based on the input value
		// .get input.val()
	}
})

BillView = Backbone.View.extend({

	template:_.template($('bill-template').text()),

	tagname: 'div',

	classname: 'billView',

	initialize: function(){
		$('.views').html('');
		$('.views').append(this.el);
		this.render()
	},

	render: function(){
		this.$el.append(this.template())
	}, 	

})

PoliticianView = Backbone.View.extend({

	template:_.template($('bill-template').text()),

	tagname: 'a',

	classname: 'politicianView',

	initialize: function(){
		$('.views').html('');
		$('.views').append(this.el);
		this.render()
	},

	render: function(){
		this.$el.append(this.template())
	}, 	
})