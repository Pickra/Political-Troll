var ViewA = Backbone.View.extend({
	
	template: _.template($('#view-A-template').text()),
	
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
	}
})





var ViewB = Backbone.View.extend({
	
	template:  _.template($('#view-B-template').text()),

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

	className: 'politicianView',

	events: {
		'click .member-id'		:  'memberId'
	},

	initialize: function(options){
		this.options = options;

		$('.politicians-view').append(this.$el);
		this.render();
	},

	render: function(){
		this.$el.append(this.template({member: this.model}));
	}, 	

	memberId: function(event){
    	memberId = this.model.get('id');
   
    	ViewD = new ViewD({model: this.model})
	},
})





var ViewD = Backbone.View.extend({

	template: _.template($('view-D-template').text()),

	className: 'ViewD',

	initialize: function(options){
		$('.main').html('');
		$('.main').append(this.$el);

		this.render();
	},

	render: function(){
		this.$el.append(this.template({options: this.options}));
	}
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
