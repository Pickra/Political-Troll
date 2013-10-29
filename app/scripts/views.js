var ViewA = Backbone.View.extend({
	
	template:_.template($('#view-A-template').text()),
	
	tagName: 'div',
	
	className: 'viewA',

	events:{

		'change .chosen'			:  'chosen'
	},

	initialize: function(){
		$('.main').html('');
		$('.main').append(this.$el);
		console.log('u initialized viewA yo');
		this.render();
	},

	render: function(){
		this.$el.append(this.template());
	},

	chosen	: function(){
// when it changes, get the value
		console.log('you made a change in chosen!!!!')
		console.log($('.chosen').val())
		
// .get(stateCode:model);
// create a new state model instance with the value returned from JSON 
// 	this.value = new State;
	
	}
})





var ViewB = Backbone.View.extend({
	
	template:_.template($('#view-B-template').text()),

	tagname: 'div',

	className: 'viewB',

	initialize: function(options){
		this.options = options;
		$('.main').html('');
		$('.main').append(this.$el);
		console.log('u initialized viewB yo');
		this.render();


	},

	render: function(){
		this.$el.append(this.template({options: this.options}));
	}

})



var MemberView = Backbone.View.extend({

	template: _.template($('#member-view-template').text()),

	// tagName: 'a',

	className: 'politicianView',

	initialize: function(options){
		this.options = options;

		$('.politicians-view').append(this.$el);
		this.render();
	},

	render: function(){
		this.$el.append(this.template({member: this.model}));
	}, 	
})




// var BillView = Backbone.View.extend({

// 	template:_.template($('bill-template').text()),

// 	tagname: 'div',

// 	className: 'billView',

// 	initialize: function(){
// 		// $('.views').html('');
// 		this.render();
// 	},

// 	render: function(){
// 		this.$el.append(this.template());
// 	}, 	

// })
