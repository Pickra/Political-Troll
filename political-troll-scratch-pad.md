# Plain English explanation

### First pick a state
* a state input (chosen plugin) appears
* you pick a state and the state input disappears w/cool transition
* a politician view appears   
* and a district view appears inside
        
        
        
### Then choose a politician
* pick your politician
* view 4 appears with a pic, the name of each bill (UL/LIs if multiple) that they voted on, and a Yea or Nea for each bill



### ..or choose a district
* choose a district (chosen plugin)
* the district view disappears ---- w/cool transition
* View 2 becomes specific to the district
  * you select a representative-view
* view 4 appears with a pic, the name of each bill (UL/LIs if multiple) that they voted on, and a Yea or Nea for each bill



### Politician View
* lump in senators w/congressman
  * they gotta be identified, Senator Yada(D or R), w/thumbnail @ the front



# Technical explanation
the LOGO ```an img``` is at the top and centered

clicking on the 'Politi-Troll' link or opening the app will take u to...
	
### View 1
	<p>Welcome to Political Troll! When you tell the troll a state in the US, he'll tell you which politicians are in that state. When you select a politician, the troll will tell you what they've been voting on and how they voted.</p>

	<input class="input-a" placeholder="Pick a State!"> (chosen plugin, lists states)
	<input type="button"> or just <button> 

when u click the `<input-a>` button some magic happens

	$('input-a').val().get()??? from -www.govtrack.us/api- for members in that state

when u click the <input-a> button, you're routed to VIEW 2



### VIEW 2
displays 2 senators and the representative(s) from that state, each politician has a model and a view(politician-view/template?)

politician-model(template?) 				// display:inline-block on children  

	<p>These Guys Are From<span>The state that was chosen in View-A</span>!</p>
	
	<div> 
		<img ="thumbnail">
		<span>politician name</span>
		<span>(D) or (R)</span>
	</div>
		 
u can click a politician-view and you'll route to View 4

## or

go to View 3, which is inside View 2, under the politician-view(s).   
	


### VIEW 3 displays -

	<input class="input-b" placeholder="Pick a District!">	
the 'chosen' plugin, lists all districts in the state selected in view 2

	<input type="button"> or just <button>
				
when u click the `input-b` button, View 3 disappears

	$("input-b").hide()??????

- html is cleared(cool transition?), and refilled w/a new View 2 based on which district in the state was selected.  
  
		politician-model/view collection

when user selects a politician from the list, some magic happens  

	$("input-a").val().get()??? from -www.govtrack.us/api- for members in that state and district

and then u route to View 4




### VIEW 4 displays
a large pic of the politician in the middle/top of view
	
	<img class="large-pic">

- politician-model/view is displayed the same as in View 2, `display: inline-block`

- bill-model/view (s)-   

	```<div>bill name<span> yea or nea</span>```

- and there is a button that routes you back to View 1




### Things To Do
- ~~make new yeoman app and corresponding repo~~
- ~~spec it out in english~~
- ~~wercker.yml in the root of your repo~~
-  ~~add your repo to Wercker at https://app.wercker.com~~
-  ~~add hipchat hooks~~
- ~~make a wire-frame~~
	- ~~make a better wire-frame~~


- script tags @ the bottom of the html	
	- order?
	- i think i got it right

  
#### deal w/JSON  
- print it out and look at it
- stubb out json      
	- pictures payload
		- ```http://www.govtrack.us/data/photos/```
			- this is not the api?!
			- no, its the database
			
	- ~~current-members payload~~

	- bills payload
		- starting with most current to the least?
			- ```http://www.govtrack.us/api/v2/bill?congress=113&order_by=-current_status_date&limit=600```

	- roll call votes payload
		- ```http://www.govtrack.us/api/v2/vote_voter?person=400003```
		#####not quite. this is 1 politician's vote record
 
###### make validation for submit buttons

######troll thru the api dox	
make a PR
tell em, when using jquery jsonp data type make sure to use {cache=true}

~~set up chosen~~


  
### TESTS  
######  write in plain english what u want to test for    
- it tests to see if the input in View-A is there
- it tests to see after you've input a state, when you press the button(on the above), that you get routed to View-B
- it tests to see if the state that was chosen in View-A/template shows up in the ```<p>these guys are from<span>state</span><p>``` in View-B
- it tests to see that the politicians, and their info (listed as UL/LIs?), show up in View-B
	- it tests to see if ```this``` info is correct ------ redundent or just misphrasing?
	- it tests to see if ```these``` links route to View-D


- it tests to see if the state and(?) district that was chosen in View-C ```(the state comes from view 2 and should be linked or just don't show the state in View-C) ``` shows up in the ```<p>pick your politician from<span>state</span>in district<span>whatever</span><p>```, in the repopulated View-B
- it re(?)tests to see that the politicians, and their info (listed as UL/LIs?), show up in View-B ```or this would be a duplicate test?```
	- it tests to see if ```this``` info is correct ------ redundent or just misphrasing?


- it tests to see if the politician selected in View-B shows up in View-D
	- it tests to see if ```this``` info is correct ------ redundent or just misphrasing?

- it tests to see if the bills that the politician voted on show up in View-D
	-  it tests to see if the Yeas and Neas show up in View-D
	- it tests to see if ```this``` info is correct ------ redundent or just misphrasing?
	
- it tests to see if the button in View-D route to View-A
  
####templates  

- person
- bill
- vote
- view a
- view b
- view c
- view d

backbone  
  
##models

##collections  

##routes

yeoman deploy  

-  delete gitignore
- dont forget to do create a dist folder
	- which i can't remember how to do


### QUESTIONS  
###### under ```FILTERING``` in the api documentation, what is the difference between listing the bills  
- http://www.govtrack.us/api/v2/bill?congress=112
#### ANSWER: is looking @ bills that are created just in the 112th congress
###### and a full text search  
- http://www.govtrack.us/api/v2/bill?q=internet
	- what does ```internet``` represent?
#### ANSWER: is looking @ all bills, ever, with the word ```internet``` in it.
~~other than the the 1st one is just 112th congress and the later spans many years in no particular order?~~
###### and what does the ```?``` stand for in the url?   
#### ANSWER it is a delimeter, signifying the end of an access point/parameter(?)


##how do i get the json in the browser??!!!!!!! $.getJSON('url') isn't WORKN!!!!!!!!!!!


###### where do i set the parameters for the ```chosen plugin```? 
###DONE

###### how  are you going to ```transition``` between views?

###### how to deal with JSON?

##how do you reference _template in tests?

###### are some of my tests redundant?



### Checkout 

typeform - website for handling forms
	look @ it for UI
	simple css

######  stuff  I'm using

http://www.govtrack.us/api/v2/bill?congress=112&order_by=-current_status_date&limit=1
http://www.govtrack.us/api/v2/vote/?congress=112&chamber=house&session=2011&limit=3
http://www.govtrack.us/api/v2/vote_voter

	used to make links out of stubbs
	
	_.each(data.objects, function(record, index){
	  document.write(record.option.value + ' to <a href="'+ record.vote.link+ '">' + record.vote.question + '</a>')
	})
	
http://www.govtrack.us/api/v2/vote_voter?person=400003
http://www.govtrack.us/api/v2/bill/330377
http://www.govtrack.us/data/photos/
http://www.govtrack.us/data/photos/400003-100px.jpeg




### DO NEXT
~~payloads~~

- set up backbone model
	- poli + bill
	- ish
	
- get the views workn
	- ish


######chosen change event
- when it changes, get the value, create a new state model instance with the value returned from JSON (as the state code)
- fetch that model instance
- loop thru each state instance, members, and put those in a view 



#troll animation
~~sprite background, so ur just css background-position, javascript would say as long as the class is on then background position is where the picture u wan a use is x,y
and then ud css or javascript animate. javascript is probably better
could link up everything in 1 function to link sound and movement w/time interval~~


######maybe too much
- the playfulness could overshadow how useful the app is


#app stylings
- blue palate. everything based off of the same blue, just varying shades
- keep styling consistent. if there is border-radius on 1 thing, put it on all things
- use a playful font, but not wild
- reformat the politician template (viewB + C). img goes on top of the name. also, maybe set those views up as a grid to accommodate alotta views

# more app functions

###### load 50 bill views (in viewD) at a time, in chronological order, and ```lazy load```, ask mason, the rest with a ```more views ``` button


###### create a "sidebar [ ] div" to hold your searches

###### add a keyword search functionality
- every time u search it puts that term in a little bar like…
	- http://moremobilerelations.com/   - does a nice job
- and each key term filters/refines that search	




# README ACKNOWLEDGMENTS
- MASON
- joe v
- chosen plugin
	- http://harvesthq.github.io/chosen/





# spell out what my models are, what my collections are, where the data is coming from and going to:




- 1st query…
```"https://www.govtrack.us/api/v2/role?current=true&state=&format=jsonp&callback=?```
- … for a specific state.
- this will return an ```OBJECTS``` array that has person objs in it…
- … (this obj? array?) which will go into collection called ```StateMembers``` 
- each (forLoop ? maybe try underscore instead) obj in the collection will be passed through the STATE MODEL to instantiate a new state model…
	- how?

#### how do i extract the  ID from each person obj?
###### SORT it????

- i need the id from each person object to then query…
```https://www.govtrack.us/api/v2/person/POLITICIAN ID GOES HERE```
##### if you can only load 600 objs at a time, how do you load the rest and/or query all of them for a specific search term?
	- ```dox say "Use offset to page through results."```
	- but the limit is still in effect…. so now what???????

	
- …the JSON/objs returned from each ```PERSON ENDPOINT QUERY``` will be but into a ```CollectionOfPoliticians```…
- these objs will be passed through the ```POLITICIAN MODEL```  to instantiate new politician models via...
- those person ids are also referenced to get photos that also go in the politician model
```http://www.govtrack.us/data/photos/POLITICIAN ID GOES HERE```
	- i think the imgs should be pulled from the DB once the new politician model is put in a view, rather than stick the imgs in a collection??????


- the JSON from...
```https://www.govtrack.us/api/v2/vote_voter?person=PERSON ID GOES HERER&limit=600```
	- … has the ID of the ```OBJECTS array``` ---- which is how this politician voted on this bill?????
	- the option ID, dono what that is……  was hoping it was the id for the bill, bu its not
	- the person obj, which has the politician's ID
	- a link to the bill that it's referencing

- the politician ID (returned from the state model payload) is somehow  connected to the BILL which also shows how they voted (YEA, AYE, NEA or NO) via…

	
	
	
	……………………………………………..to show how each politician voted
	


 

### WTF
if i use ```voter_vote```, which keeps track of all the voting, I'm going to get thousands of votes per person, which is going to be too hard to sort thru in the app. ```vote``` + ```bill``` don't filter search by person.

- although, ```vote``` does have a ```related_bill``` field/param???????
- key word search w/```q```? looking for ```yea```, ```nea``` , ```aye```, ```no``` 


#what are my options for SORT??????? it only lists "created"!!!!





# the role endpoint link 
- returns the fields: name, ID
- fetch the pic from
```"http://www.govtrack.us/data/photos/ +memberId"``` 

to put in the name, pic, and vote info in the final view

##### the link and its fields to get what they voted on and how they voted
			"https://www.govtrack.us/api/v2/vote_voter/?person=" +memberId+ "&limit=600&fields=option__value,vote__question"
- NOTE: this will only return 600 votes, and there are thousands, sometimes 10s of thousands
	- *deal with later*
- use 2 _s to list a field and its additional value
- ex: vote__question  - vote is the property, question is the value


memberId is now the id for the <a> for the template(?)
when u click on the member it routes you to viewD
- need a route to viewD



#whats hapnin

i am making a new collection in my router

when u fetch a new instance of a collection
it uses the url in the collection, grabs the jsonp, which pases thru the parse function(if specified), which is then put in the collection, as models(automagically, but u have to specify what model, which happens @ the end of the collection).

when somethin is added to the collection, it takes the model(specified in the collection) and makes a new MemberView 

this .on add (in the collection) is listening for changes to the collection. when u call ```fetch``` (on the collection) thats when it starts putting stuff into the collection


when the name is clickt, get the id and stuff it in an img tag with the url + the id as the src=""



# styles

use more of the space

input and button together and give em more importance
- maybe put em in a div w/a background	

text color like the white house

give the txt in the submit button more room to breathe

politician name div w/background color, something to separate it out, maybe a hover. visual importance

vote value = white circle w/red or green value

patterntap.com
searching for specific kind of content

### recent suggestions
- put something on the opposite side of the troll to balance it out
	-  like my name?
- make keyword search/filter in a left column of viewD
	- make it fixed
- put the billView in 1 div as opposed to 3 (like u have now)
	- the date and time(sans year) on the left
	-  bill in the middle
	- vote on the right, in a circle
	-this way u still get it separated but keep a consistent view size

-------------------
####worth knowing
when u search for a dom element using query, $('.element'), it returns those element(s) in an array.

##### starting w/line 36 of the router @ viewB
when u initialize a new view, u pass in an obj literal. that obj literal is passed into the views initialize function, as the arg. u have to associate this w/the arg -
		
		this.arg = arg

goin back to where we left off in the router

- now u r instantiating a new collection(stateMembers)
- and then fetching
- the stateMembers collection initializes, which listens for something being added. in this case jsonp is being added. the jsonp is then passing thru the arg, line 4 of StateMembers, to b a new instantiation of a model(which is associated with the property on line 17)for the new view, MemberView.
- line 9, has a parse method(which is a backbone method), which is always associated with an ajax call, json( p ). the arg represents everything coming back from the call, the api in this case. 

		response.objects
		is separating whatever -objects- is from the rest of the response

- the url (is a backbone method)method is where it's fetching from 

now i have a new member views in viewB, starting @ line 60 in views
- its being initialized. when its rendered, its appending the template, which is using/passing the model from the collection thru the template; and the property of the obj literal, in this case `member`, is how u call that model info into the template; like line 154 in index.
- when the member view, specifically `.member-id`, a new viewD is instantiated

