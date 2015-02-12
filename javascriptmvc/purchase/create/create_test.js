steal('funcunit', 
	'./create.js',
	'flying/models/purchase.js',
	'flying/models/fixtures', 
	function (S, PurchaseCreate, Purchase, purchaseStore ) {

	module("flying/purchase/create", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new PurchaseCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			purchaseStore.reset();
		}
	});
	
	test("create purchases", function () {
		stop();
		
		Purchase.bind("created",function(ev, purchase){
			ok(true, "Ice Water added");
			equals(purchase.name, "Ice Water", "name set correctly");
			equals(purchase.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Purchase.unbind("created",arguments.callee);
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