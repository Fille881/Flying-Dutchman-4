steal(
	'funcunit',
	'./list.js',
	'flying/models/beer.js',
	'flying/models/fixtures',
	function(S, BeerList, Beer, beerStore ){

	module("flying/beer/list", { 
		setup: function(){
			$("#qunit-test-area").append("<div id='beers'></div>");
			this.list = new BeerList("#beers");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			beerStore.reset();
		}
	});
	
	test("lists all beers", function(){
		stop();
		
		// retrieve beers
		Beer.findAll({}, function(beers){
			// make sure they are listed in the page
			
			S(".beer").size(beers.length,function(){
				ok(true, "All beers listed");
				
				start();
			})
		})
	});
	
	test("lists created beers", function(){
		
		new Beer({
			name: "Grilled Cheese",
			description: "grill cheese in bread"
		}).save();
		
		S('h3:contains(Grilled Cheese X)').exists("Lists created beer");
	})
	
	
	test("delete beers", function(){
		new Beer({
			name: "Ice Water",
			description: "mix ice and water"
		}).save();
		
		// wait until grilled cheese has been added
		S('h3:contains(Ice Water X)').exists();
		
		S.confirm(true);
		S('h3:last a').click();
		
		
		S('h3:contains(Ice Water)').missing("Grilled Cheese Removed");
		
	});


});