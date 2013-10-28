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

	url: 'https://www.govtrack.us/api/v2/role?current=true&state=SC&format=jsonp&callback=?',

	model: State,
})