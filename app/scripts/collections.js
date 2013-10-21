var CollectionOfPoliticians = Backbone.Collection.extend({
	initialize: function(){
		this.on('add', function(politician) {
			new PoliticianView({model:politician})
			consol.log('you just made a new collection brah!!!')
		})
	},
	model: Politician,
})