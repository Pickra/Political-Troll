ViewA = Backbone.View.extend({
	
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





ViewB = Backbone.View.extend({
	
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



MemberView = Backbone.View.extend({

template: _.template($('#member-view-template').text()),

	className: 'memberView',

	events: {
		'click .member-id'		:  'memberId'
	},

	initialize: function(options){
		this.options = options;

		$('.members-view').append(this.$el);
		this.render();
	},

	render: function(){
		this.$el.append(this.template({member: this.model}));
	}, 	

	memberId: function(event){
    	viewD = new ViewD({model: this.model});	
	},
})



ViewD = Backbone.View.extend({

	template: _.template($('#view-D-template').text()),

	className: 'ViewD',

	initialize: function(){

		$('.main').html('');
		$('.main').append(this.$el);

		// this.bills = new Bills([], {id: this.model.get('id')});
		var bills = new Bills([], {id: this.model.get('person').id});
		
		var that = this;
		bills.fetch({cache: true});
		

		this.render();
	},

	render: function(){
		this.$el.append(this.template({member: this.model}));
	}
})


var BillView = Backbone.View.extend({

	template:_.template($('#bill-view-template').text()),

	tagname: 'div',

	className: 'billView',

	initialize: function(options){
		this.options = options;
		$('.ViewD').append(this.$el);
		
		this.render();
	},

	render: function(){
		this.$el.append(this.template({options: this.model}));
	}, 	

})
