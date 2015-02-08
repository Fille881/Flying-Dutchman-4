steal('funcunit', 
	'./create.js',
	'flying/models/beer.js',
	'flying/models/fixtures', 
	function (S, BeerCreate, Beer, beerStore ) {

	module("flying/beer/create", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new BeerCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			beerStore.reset();
		}
	});
	
	test("create beers", function () {
		stop();
		
		Beer.bind("created",function(ev, beer){
			ok(true, "Ice Water added");
			equals(beer.name, "Ice Water", "name set correctly");
			equals(beer.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Beer.unbind("created",arguments.callee);
		})
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("[type=submit]").val("Creating...","button text changed while created");
		S("[type=submit]").val("Create", function(){
			ok(true, "button text changed back after create");
			equals(S("[name=name]").val(), "", "form reset");
			equals(S("[name=description]").val(), "", "form reset");
		});
	});

});