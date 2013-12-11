$(document).ready(function(){$(".chosen").chosen({width:"150px"})}),State=Backbone.Model.extend({}),Member=Backbone.Model.extend({initialize:function(){console.log("Member model",this)}}),Bill=Backbone.Model.extend({initialize:function(){console.log("Bill model, ",this)}}),StateMembers=Backbone.Collection.extend({initialize:function(){this.on("add",function(a){new MemberView({model:a})})},parse:function(a){return a.objects},url:function(){return"https://www.govtrack.us/api/v2/role?current=true&state="+stateCode+"&format=jsonp&callback=?"},model:Member}),Bills=Backbone.Collection.extend({initialize:function(a,b){this.options=b,this.on("add",function(a){new BillView({model:a})})},parse:function(a){return a.objects},url:function(){return console.log("this dude's id #",this.options.id),"https://www.govtrack.us/api/v2/vote_voter/?person="+this.options.id+"&limit=5&sort=-created&fields=option__value,created,vote__question&format=jsonp&callback=?"},model:Bill}),ViewA=Backbone.View.extend({template:_.template($("#view-A-template").text()),className:"viewA",initialize:function(){$(".main").html(""),$(".main").append(this.$el),console.log("u initialized viewA yo"),this.render()},render:function(){this.$el.append(this.template())}}),ViewB=Backbone.View.extend({template:_.template($("#view-B-template").text()),className:"viewB",initialize:function(a){this.options=a,$(".main").html(""),$(".main").append(this.$el),console.log("viewB initialized"),this.render()},render:function(){this.$el.append(this.template({options:this.options}))}}),MemberView=Backbone.View.extend({template:_.template($("#member-view-template").text()),className:"memberView",events:{"click .member-id":"memberId"},initialize:function(){$(".members-view").append(this.$el),this.render()},render:function(){this.$el.append(this.template({member:this.model}))},memberId:function(){console.clear(),viewD=new ViewD({model:this.model})}}),ViewD=Backbone.View.extend({template:_.template($("#view-D-template").text()),className:"ViewD",initialize:function(){$(".main").html(""),$(".main").append(this.$el);var a=new Bills([],{id:this.model.get("person").id});a.fetch({cache:!0}),this.render()},render:function(){this.$el.append(this.template({member:this.model}))}});var BillView=Backbone.View.extend({template:_.template($("#bill-view-template").text()),className:"billView",initialize:function(a){this.options=a,$(".ViewD").append(this.$el),this.render()},render:function(){var a=this.model.get("option").value,b="";"Yea"===a||"Aye"===a?b="green":("Nay"==a||"No"===a)&&(b="red");var c=new Date(this.model.get("created")).toDateString(),d=new Date(this.model.get("created")).toLocaleTimeString();this.model.set({klass:b,time:d,date:c}),this.$el.append(this.template({options:this.model}))}});PolitiTrollRouter=Backbone.Router.extend({initialize:function(){console.log("router initialized")},routes:{"":"viewA",B:"viewB"},viewA:function(){this.viewA=new ViewA,console.log("routed to viewA")},viewB:function(){console.log("routed to viewB"),$(".chosen").length>0&&(stateCode=$(".chosen").val(),state=$(".chosen :selected").text()),this.viewB=new ViewB({state:state}),this.membersFromYourState=new StateMembers,this.membersFromYourState.fetch({cache:!0}),console.log("a collection of your state members = ",this.membersFromYourState)}}),router=new PolitiTrollRouter,Backbone.history.start();