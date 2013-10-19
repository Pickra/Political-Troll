var PolitiTrollRouter = Backbone.Router.extend({
	initialize: function(){
		// ???? don't need initialize????
		this.viewA = new ViewA()
		// ?????
	},

	routes: {
	''				: 'viewA'

	},

	viewA: function(){
		console.log('route to viewA, you did!');


	}
})