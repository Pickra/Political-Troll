
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
	},

	viewD: function(){
		console.log('viewD');
	}


})

router = new PolitiTrollRouter()
Backbone.history.start()