StateMembers = Backbone.Collection.extend({
	initialize: function(){
		
		this.on("add", function(model){
			new MemberView({model: model})
		})
	},

	parse: function(response){
		return response.objects
	},
	
	url: function(){
		return 'https://www.govtrack.us/api/v2/role?current=true&state=' + stateCode + '&format=jsonp&callback=?'
	},

	model: Member,

})


Bills = Backbone.Collection.extend({

	initialize: function(model, options){
		
		this.options = options;
		
		console.log(model)

		this.on('add', function(model){
			new BillView({model: model})
			console.log('this model', model);
		})
	},

	parse: function(response){
		return response.objects
		console.log('this response objects', response.objects);
	},

	url: function(){
		console.log(this.options.id);
		return "https://www.govtrack.us/api/v2/vote_voter/?person=" + this.options.id + "&limit=600&fields=option__value,vote__question&format=jsonp&callback=?"
		// return "https://www.govtrack.us/api/v2/vote_voter/?person=" + '12378' + "&limit=600&fields=option__value,vote__question&format=jsonp&callback=?"
	},

	model:Bill,
})