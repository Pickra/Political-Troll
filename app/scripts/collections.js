StateMembers = Backbone.Collection.extend({
	initialize: function(){
		// this.on('add', function(members) {
		// 	new ({members:politician})
		// 	console.log(members)
		// 	console.log('StateMembers collection initialized')
		// })
	},

	parse: function(response){

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