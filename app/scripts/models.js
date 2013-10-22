var State = Backbone.Model.extend({
	// make sure to call fetch with cache: true in the options
	// state.fetch({cache: true, success: function(data){console.log('hey')}})

// state.get(members)
	url: function() {															/* stateCode is the state field, the param established in the JSON*/
		return "https://www.govtrack.us/api/v2/role?current=true&state=" + this.get('stateCode') + "&format=jsonp&callback=?"
	},

	parse: function(response){
		// members is an array
		return {members: response.objects}
	}
})

var Politician = Backbone.Model.extend({
	initialize: function(){
		console.log('politician was made!!!!')
	},

	defaults:{
		name: '', 					/*	how do i call it inside 'person object'?	*/
		id: '',						/*	reference the DB	*/
		photo: '',
		state: '',
		role_type_label: '' 		/*	senator or representative	*/
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