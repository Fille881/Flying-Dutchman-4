steal(
	'funcunit',
	'./list.js',
	'flying/models/login.js',
	'flying/models/fixtures',
	function(S, LoginList, Login, loginStore ){

	module("flying/login/list", { 
		setup: function(){
			$("#qunit-test-area").append("<div id='logins'></div>");
			this.list = new LoginList("#logins");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			loginStore.reset();
		}
	});
	
	test("lists all logins", function(){
		stop();
		
		// retrieve logins
		Login.findAll({}, function(logins){
			// make sure they are listed in the page
			
			S(".login").size(logins.length,function(){
				ok(true, "All logins listed");
				
				start();
			})
		})
	});
	
	test("lists created logins", function(){
		
		new Login({
			name: "Grilled Cheese",
			description: "grill cheese in bread"
		}).save();
		
		S('h3:contains(Grilled Cheese X)').exists("Lists created login");
	})
	
	
	test("delete logins", function(){
		new Login({
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