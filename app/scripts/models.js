var State = Backbone.Model.extend({
	// make sure to call fetch with cache: true in the options
	// state.fetch({cache: true, success: function(data){console.log('hey')}})

// state.get(members)
	// url: function() {															/* stateCode is the state field, the param established in the JSON*/
	// 	return "https://www.govtrack.us/api/v2/role?current=true&state=" + this.get('stateCode') + "&format=jsonp&callback=?"
	// },

	// parse: function(response){
	// 	// members is an object in the collection
	// 	return {members: response.objects}
	// }
})











var Member = Backbone.Model.extend({
	initialize: function(){

		// politician = _.chain()
		// _.each()_.pluck(StateMembers, [name, id]);

		console.log('this is: ', this)
	},


})






var Bill = Backbone.Model.extend({

	initialize: function() {
		console.log('bill was made!!!!')
	},

	defaults:{
		name: '',
		id: '',
		vote: ''
	}

})

