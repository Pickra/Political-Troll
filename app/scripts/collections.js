var CollectionOfPoliticians = Backbone.Collection.extend({
	initialize: function(){
		this.on('add', function(A) {
			new Politician({model:Politician})
		})
	},
	model: Politician
})