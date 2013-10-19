var Politician = Backbone.Model.extend(){
	initialize: function(){
		console.log('politician was made!!!!')
	},

	defaults:{
		person:'',
		id:'',
		photo:'',
		state: '',
		district: ''
	}
}

var Bill = Backbone.Model.extend(){

	initialize: function() {
		console.log('bill was made!!!!')
	},

	defaults:{
		id:'',
		link:''
	}

}

var ModelA = Backbone.Model.extend(){
	initialize: function(){
		console.log('model-A was made!!!!!!!!')
	}
}