
var PolitiTrollRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('router initialized sucka!')
	},

	routes: {
	''				: 'viewA'

	},

	viewA: function(){
		this.viewA = new ViewA()
		console.log('route to viewA, you did!');
	}
})

router = new PolitiTrollRouter()
Backbone.history.start()