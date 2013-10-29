
var PolitiTrollRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('router initialized sucka!')
	},

	routes: {

	''				: 'viewA',
	'B'				: 'viewB'

	},

	viewA: function(){
		this.viewA = new ViewA();
		console.log('route to viewA, you did!');
	},

	viewB: function(){
		console.log('route to viewB, you did!');	

		stateCode = $('.chosen').val();

		state = $('.chosen :selected').text();
		this.viewB = new ViewB({state: state});
		this.membersFromYourState = new StateMembers();

		this.membersFromYourState.fetch({cache:true})

		this.membersFromYourState.each(function(model){
			new Member({member: model})
		})

		console.log(this.membersFromYourState)
	}


})

router = new PolitiTrollRouter()
Backbone.history.start()