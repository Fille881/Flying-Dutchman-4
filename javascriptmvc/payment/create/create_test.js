steal('funcunit', 
	'./create.js',
	'flying/models/payment.js',
	'flying/models/fixtures', 
	function (S, PaymentCreate, Payment, paymentStore ) {

	module("flying/payment/create", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new PaymentCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			paymentStore.reset();
		}
	});
	
	test("create payments", function () {
		stop();
		
		Payment.bind("created",function(ev, payment){
			ok(true, "Ice Water added");
			equals(payment.name, "Ice Water", "name set correctly");
			equals(payment.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Payment.unbind("created",arguments.callee);
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