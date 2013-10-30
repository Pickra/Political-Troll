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

	initialize: function(){
		this.on('add', function(model){
			new BillView({model: model})
		})
	},

	parse: function(response){
		return response.objects
	},

	url: function(){
		return "https://www.govtrack.us/api/v2/vote_voter/?person=" +memberId+ "&limit=600&fields=option__value,vote__question"
	},

	model:Bill,
})