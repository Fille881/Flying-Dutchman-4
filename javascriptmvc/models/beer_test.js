steal( "./beer.js", 
	   "funcunit/qunit", 
	   "flying/models/fixtures", 
	   function( Beer ){
	   	
	module("flying/models/beer");
	
	test("findAll", function(){
		expect(4);
		stop();
		Beer.findAll({}, function(beers){
			ok(beers, "findAll provides an object")
	        ok(beers.length, "findAll provides something array-like")
	        ok(beers[0].name, "findAll provides an object with a name")
	        ok(beers[0].description, "findAll provides an object with a description")
			start();
		});
	});
	
	test("create", function(){
		expect(3)
		stop();
		new Beer({name: "dry cleaning", description: "take to street corner"}).save(function(beer) {
			ok(beer, "save provides an object");
			ok(beer.id, "save provides and object with an id");
			equals(beer.name,"dry cleaning", "save provides an objec with a name")
			beer.destroy()
			start();
		});
	});

	test("update" , function(){
		expect(2);
		stop();
		new Beer({name: "cook dinner", description: "chicken"}).save(function(beer) {
			equals(beer.description,"chicken", "save creates with description");
			beer.attr({description: "steak"}).save(function(beer){
				equals(beer.description,"steak", "save udpates with description");
				beer.destroy();
				start();
			});
        });
	});

	test("destroy", function(){
		expect(1);
		stop();
		new Beer({name: "mow grass", description: "use riding mower"}).destroy(function(beer) {
			ok( true ,"Destroy called" )
			start();
		});
	});
});