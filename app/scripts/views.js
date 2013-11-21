ViewA = Backbone.View.extend({
	
	template: _.template($('#view-A-template').text()),
	
	// tagName: 'a',
	
	className: 'viewA',

	initialize: function(){
		$('.main').html('');
		$('.main').append(this.$el);
		console.log('u initialized viewA yo');
		this.render();
	},

	render: function(){
		this.$el.append(this.template());
	},
})


ViewB = Backbone.View.extend({
	
	template:  _.template($('#view-B-template').text()),

	className: 'viewB',


	initialize: function(options){
		this.options = options;
		$('.main').html('');
		$('.main').append(this.$el);
		console.log('viewB initialized');
		
		this.render();
	},

	render: function(){
		this.$el.append(this.template({options: this.options}));
	}

})



MemberView = Backbone.View.extend({

	template: _.template($('#member-view-template').text()),
	
	// tagName: a,

	className: 'memberView',

	events: {
		'click .member-id'		:  'memberId'
	},

	initialize: function(options){

		$('.members-view').append(this.$el);
		this.render();
	},

	render: function(){
		this.$el.append(this.template({member: this.model}));
	}, 	

	memberId: function(){
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
		
		bills.fetch({cache: true});
		this.render();
	},

	render: function(){
		this.$el.append(this.template({member: this.model}));
	}
})


var BillView = Backbone.View.extend({

	template:_.template($('#bill-view-template').text()),

	className: 'billView',

	initialize: function(options){
		this.options = options;
		$('.ViewD').append(this.$el);
		

		this.render();
	},

	render: function(){
		this.$el.append(this.template({options: this.model}));
		
		var voteValue = $('.vote').text() - voteValue;

		if (voteValue === 'Yea' || voteValue === 'Aye') {
		    $('.vote').css('color', 'green');
		}
		else if (voteValue == 'Nay' || voteValue === 'No') {
		    $('.vote').css('color', 'red');
		}
		    console.log($('.vote').length + ' ' + voteValue);
		    // console.log($('.vote').length)
	},

})
