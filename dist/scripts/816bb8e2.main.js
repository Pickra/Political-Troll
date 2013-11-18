$(document).ready(function(){$(".chosen").chosen({width:"150px"})}),State=Backbone.Model.extend({}),Member=Backbone.Model.extend({initialize:function(){console.log("this is ",this)}}),Bill=Backbone.Model.extend({initialize:function(){console.log("this is, ",this)}}),StateMembers=Backbone.Collection.extend({initialize:function(){this.on("add",function(a){new MemberView({model:a})})},parse:function(a){return a.objects},url:function(){return"https://www.govtrack.us/api/v2/role?current=true&state="+stateCode+"&format=jsonp&callback=?"},model:Member}),Bills=Backbone.Collection.extend({initialize:function(a,b){this.options=b,console.log(a),this.on("add",function(a){new BillView({model:a}),console.log("this model",a)})},parse:function(a){return a.objects},url:function(){return console.log(this.options.id),"https://www.govtrack.us/api/v2/vote_voter/?person="+this.options.id+"&limit=5&sort=-created&fields=option__value,created,vote__question&format=jsonp&callback=?"},model:Bill}),ViewA=Backbone.View.extend({template:_.template($("#view-A-template").text()),tagName:"div",className:"viewA",events:{"change .chosen":"chosen"},initialize:function(){$(".main").html(""),$(".main").append(this.$el),console.log("u initialized viewA yo"),this.render()},render:function(){this.$el.append(this.template())},chosen:function(){console.log("you made a change in chosen!!!!"),console.log($(".chosen").val())}}),ViewB=Backbone.View.extend({template:_.template($("#view-B-template").text()),tagname:"div",className:"viewB",initialize:function(a){this.options=a,$(".main").html(""),$(".main").append(this.$el),console.log("viewB initialized"),this.render()},render:function(){this.$el.append(this.template({options:this.options}))}}),MemberView=Backbone.View.extend({template:_.template($("#member-view-template").text()),className:"memberView",events:{"click .member-id":"memberId"},initialize:function(a){this.options=a,$(".members-view").append(this.$el),this.render()},render:function(){this.$el.append(this.template({member:this.model}))},memberId:function(){viewD=new ViewD({model:this.model})}}),ViewD=Backbone.View.extend({template:_.template($("#view-D-template").text()),className:"ViewD",initialize:function(){$(".main").html(""),$(".main").append(this.$el);var a=new Bills([],{id:this.model.get("person").id});a.fetch({cache:!0}),this.render()},render:function(){this.$el.append(this.template({member:this.model}))}});var BillView=Backbone.View.extend({template:_.template($("#bill-view-template").text()),className:"billView",initialize:function(a){this.options=a,$(".ViewD").append(this.$el),this.render()},render:function(){this.$el.append(this.template({options:this.model}));var a=$(".vote").val();"Yea"===a||"Aye"===a?$(".vote").css("color","green"):("Nay"==a||"No"===a)&&$(".vote").css("color","red")}});PolitiTrollRouter=Backbone.Router.extend({initialize:function(){console.log("router initialized")},routes:{"":"viewA",B:"viewB"},viewA:function(){this.viewA=new ViewA,console.log("routed to viewA")},viewB:function(){console.log("routed to viewB"),stateCode=$(".chosen").val(),state=$(".chosen :selected").text(),this.viewB=new ViewB({state:state}),this.membersFromYourState=new StateMembers,this.membersFromYourState.fetch({cache:!0}),console.log("collection = ",this.membersFromYourState)}}),router=new PolitiTrollRouter,Backbone.history.start();