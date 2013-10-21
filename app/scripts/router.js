
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
		this.viewB = new ViewB();
		console.log('route to viewB, you did!');	
	}
})

router = new PolitiTrollRouter()
Backbone.history.start()