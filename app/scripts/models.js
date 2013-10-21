var State = Backbone.Model.extend({
	// make sure to call fetch with cache: true in the options
	// state.fetch({cache: true, success: function(data){console.log('hey')}})

// state.get(members)
	url: function() {
		return "https://www.govtrack.us/api/v2/role?current=true&state=" + this.get('stateCode') + "&format=jsonp&callback=?"
	},

	parse: function(response){
		return {members: response.objects}
	}
})

var Politician = Backbone.Model.extend({
	initialize: function(){
		console.log('politician was made!!!!')
	},

	defaults:{
		name: '',
		id: '',
		photo: '',
		state: '',
		district: ''
	}
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

// var ModelA = Backbone.Model.extend(){
// 	initialize: function(){
// 		console.log('model-A was made!!!!!!!!')
// 	}
// }