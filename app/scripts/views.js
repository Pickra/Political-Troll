var ViewA = Backbone.View.extend({
	
	template:_.template($('#view-A-template').text()),
	
	tagName: 'div',
	
	classname: 'viewA',

	initialize: function(){
		$('.main').html('');
		$('.main').append(this.$el);
		console.log('u initialized viewA yo');
		this.render();
	},

	render: function(){
		this.$el.append(this.template());
	}
})





var ViewB = Backbone.View.extend({
	
	template:_.template($('#view-B-template').text()),

	tagname: 'div',

	classname: 'viewB',

	initialize: function(){
		$('.main').html('');
		$('.main').append(this.$el);
		console.log('u initialized viewB yo');
		this.render();
	},

	render: function(){
		this.$el.append(this.template());
	}

})






var BillView = Backbone.View.extend({

	template:_.template($('bill-template').text()),

	tagname: 'div',

	classname: 'billView',

	initialize: function(){
		// $('.views').html('');
		this.render();
	},

	render: function(){
		this.$el.append(this.template());
	}, 	

})

var PoliticianView = Backbone.View.extend({

	template:_.template($('bill-template').text()),

	tagname: 'a',

	classname: 'politicianView',

	initialize: function(){
		// $('.views').html('');
		this.render();
	},

	render: function(){
		this.$el.append(this.template());
	}, 	
})