
var PolitiTrollRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('router initialized')
	},

	routes: {

	''				: 'viewA',
	'B'				: 'viewB',
	'D'				: 'viewD'

	},

	viewA: function(){
		this.viewA = new ViewA();
		console.log('route to viewA, you did!');
	},


	// make sure to call fetch with cache: true in the options. because this API doesn't like the trick that javascript does where it changes the end of the url every refresh.
	// state.fetch({cache: true, success: function(data){console.log('hey')}})

	viewB: function(){
		console.log('route to viewB, you did!');	

		stateCode = $('.chosen').val();

		state = $('.chosen :selected').text();
		this.viewB = new ViewB({state: state});
		

		this.membersFromYourState = new StateMembers();

		this.membersFromYourState.fetch({cache:true});

		this.membersFromYourState.each(function(model){
			new Member({member: model})
		})

		console.log(this.membersFromYourState);
	},

	viewD: function(){
		this.viewD = new ViewD()

		

		console.log(this.headshots);
	}


})

router = new PolitiTrollRouter()
Backbone.history.start()