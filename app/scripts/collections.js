StateMembers = Backbone.Collection.extend({
	initialize: function(){
		this.on("add", function(model){
			new MemberView({model: model})
		})
	},

	parse: function(response){
		// _.each(response, function(array){
		// 	_.each(array, function(object){
		// 		console.log(object.person);
		// 	})
		// })
		return response.objects
	},
	

	// make sure to call fetch with cache: true in the options
	// state.fetch({cache: true, success: function(data){console.log('hey')}})
	url: function(){
		return 'https://www.govtrack.us/api/v2/role?current=true&state=' + stateCode + '&format=jsonp&callback=?'
		console.log(stateCode);
	},

	model: Member,

})