var ViewA = Backbone.View.extend({
	template:_.template($('view-A-template').text()),
	
	tagName: 'div',
	
	classname: 'viewA',

	initialize: function(){
		$('.views').html('');
		this.render()
	},

	render: function(){
		this.$el.append(this.template()) /*and here?*/
	}, 
})

var BillView = Backbone.View.extend({

	template:_.template($('bill-template').text()),

	tagname: 'div',

	classname: 'billView',

	initialize: function(){
		$('.views').html('');
		this.render()
	},

	render: function(){
		this.$el.append(this.template())
	}, 	

})

var PoliticianView = Backbone.View.extend({

	template:_.template($('bill-template').text()),

	tagname: 'a',

	classname: 'politicianView',

	initialize: function(){
		$('.views').html('');
		this.render()
	},

	render: function(){
		this.$el.append(this.template())
	}, 	
})