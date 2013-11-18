
PolitiTrollRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('router initialized')
	},

	routes: {
// this is an event listener, the left side is what it's listening for the right side, which is the function and then the function is run below
	''				: 'viewA',
	'B'				: 'viewB'

	},

	viewA: function(){
		this.viewA = new ViewA();
		console.log('routed to viewA');
	},


	// make sure to call fetch with cache: true in the options. because this API doesn't like the trick that javascript does where it changes the end of the url every refresh.
	// state.fetch({cache: true, success: function(data){console.log('hey')}})

	viewB: function(){
		console.log('routed to viewB');	

		stateCode = $('.chosen').val();
		state = $('.chosen :selected').text();

		this.viewB = new ViewB({state: state});

		this.membersFromYourState = new StateMembers();

		this.membersFromYourState.fetch({cache:true});

		console.log('collection = ', this.membersFromYourState);
	},


})

router = new PolitiTrollRouter()
Backbone.history.start()