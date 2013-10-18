Politician = Backbone.Model.extend(){
	initialize: function(){
		console.log('politician was made!!!!')
	},

	defaults:{
		person:'',
		id:'',
		photo:''

	}
}

Bill = Backbone.Model.extend(){

	initialize: function() {
		console.log('bill was made!!!!')
	},

	defaults:{

		id:'',
		link:''
	}

}

ModelA = Backbone.Model.extend(){
	initialize: function(){
		console.log('model-A was made!!!!!!!!')
	}
}