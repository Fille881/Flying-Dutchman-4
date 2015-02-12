steal(
	'funcunit',
	'./list.js',
	'flying/models/account.js',
	'flying/models/fixtures',
	function(S, AccountList, Account, accountStore ){

	module("flying/account/list", { 
		setup: function(){
			$("#qunit-test-area").append("<div id='accounts'></div>");
			this.list = new AccountList("#accounts");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			accountStore.reset();
		}
	});
	
	test("lists all accounts", function(){
		stop();
		
		// retrieve accounts
		Account.findAll({}, function(accounts){
			// make sure they are listed in the page
			
			S(".account").size(accounts.length,function(){
				ok(true, "All accounts listed");
				
				start();
			})
		})
	});
	
	test("lists created accounts", function(){
		
		new Account({
			name: "Grilled Cheese",
			description: "grill cheese in bread"
		}).save();
		
		S('h3:contains(Grilled Cheese X)').exists("Lists created account");
	})
	
	
	test("delete accounts", function(){
		new Account({
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