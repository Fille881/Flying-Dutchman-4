steal('funcunit', 
	'./create.js',
	'flying/models/login.js',
	'flying/models/fixtures', 
	function (S, LoginCreate, Login, loginStore ) {

	module("flying/login/create", {
		setup: function(){
			$("#qunit-test-area").append("<form id='create'></form>");
			new LoginCreate("#create");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			loginStore.reset();
		}
	});
	
	test("create logins", function () {
		stop();
		
		Login.bind("created",function(ev, login){
			ok(true, "Ice Water added");
			equals(login.name, "Ice Water", "name set correctly");
			equals(login.description, 
				"Pour water in a glass. Add ice cubes.", 
				"description set correctly");
			start();
			Login.unbind("created",arguments.callee);
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