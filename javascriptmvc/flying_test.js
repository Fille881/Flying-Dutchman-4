steal(
	'funcunit',
	'./models/beer_test.js',
	'flying/beer/create/create_test.js',
	'flying/beer/list/list_test.js',
	'./models/account_test.js',
	'flying/account/create/create_test.js',
	'flying/account/list/list_test.js',
	'./models/transaction_test.js',
	'flying/transaction/create/create_test.js',
	'flying/transaction/list/list_test.js',
	'./models/purchase_test.js',
	'flying/purchase/create/create_test.js',
	'flying/purchase/list/list_test.js',
	'./models/payment_test.js',
	'flying/payment/create/create_test.js',
	'flying/payment/list/list_test.js',
	'./models/login_test.js',
	'flying/login/create/create_test.js',
	'flying/login/list/list_test.js',
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
	
	test("creating a accounts adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
	
	test("creating a transactions adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
	
	test("creating a purchases adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
	
	test("creating a payments adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
	
	test("creating a logins adds it to the list ", function () {
		
		S("[name=name]").type("Ice Water");
		S("[name=description]").type("Pour water in a glass. Add ice cubes.");
		
		S("[type=submit]").click();
		
		S("h3:contains(Ice Water)").exists();
		S("p:contains(Pour water in a glass. Add ice cubes.)").exists()
	});
});
