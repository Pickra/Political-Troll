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
		console.clear();
    	viewD = new ViewD({model: this.model});	
	},
})



ViewD = Backbone.View.extend({

	template: _.template($('#view-D-template').text()),

	className: 'ViewD',

	initialize: function(){

		$('.main').html('');
		$('.main').append(this.$el);

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
// 'options' is how you're passing the JSON properties thru the template
		this.options = options;
		$('.bills').append(this.$el);
		

		this.render();
	},

	render: function(){
// 'option' is refering to a property in the JSONP

// Here is where the color of the vote is being established
		var voteValue = this.model.get('option').value;
		var color = '';

		if (voteValue === 'Yea' || voteValue === 'Aye') {
		    // $('.vote').css('color', 'green');
		    color = 'green';
		}
		else if (voteValue == 'Nay' || voteValue === 'No') {
		    // $('.vote').css('color', 'red'); 
		    color = 'red';
		}


// Here I am making the .created (when they voted) value to be ledgible
		var time = new Date(this.model.get('created')).toString();

		this.model.set({color: color, time: time})
		this.$el.append(this.template({options: this.model}));
	},

})
