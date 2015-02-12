steal('funcunit', 
	'./create.js',
	'flying/models/account.js',
	'flying/models/fixtures', 
	function (S, AccountCreate, Account, accountStore ) {

	module("flying/account/create", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new AccountCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			accountStore.reset();
		}
	});
	
	test("create accounts", function () {
		stop();
		
		Account.bind("created",function(ev, account){
			ok(true, "Ice Water added");
			equals(account.name, "Ice Water", "name set correctly");
			equals(account.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Account.unbind("created",arguments.callee);
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