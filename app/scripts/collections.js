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


Headshots = Backbone.Collection.extend({
	initialize: function(){
	}, 

	url: function(){
		return 'http://www.govtrack.us/data/photos/' + memberId + "-200px.jpeg"
	}, 

	model: Bill,
})