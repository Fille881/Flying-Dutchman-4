steal(
	'funcunit',
	'./models/beer_test.js',
	'flying/beer/create/create_test.js',
	'flying/beer/list/list_test.js',
	function (S) {

	// this tests the assembly 
	module("flying", {
		setup : function () {
			S.open("//flying/index.html");
		}
	});

	test("welcome test", function () {
		equals(S("h1").text(), "Welcome to JavaScriptMVC!", "welcome text");
	});

	
	test("creating a beers adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
});
