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

	// console.log('new StateMembers', StateMembers),
})


Bills = Backbone.Collection.extend({

	initialize: function(model, options){
		
		this.options = options;
		
		// console.log(model)

		this.on('add', function(model){
			new BillView({model: model})
			// console.log('this model', model);
		})
	},

	parse: function(response){
		return response.objects
		console.log('this response objects', response.objects);
	},

	url: function(){
		console.log('this dude\'s id #', this.options.id);
		return "https://www.govtrack.us/api/v2/vote_voter/?person=" + this.options.id + "&limit=600&sort=-created&fields=option__value,created,vote__question&format=jsonp&callback=?"
	},

	model:Bill,
})