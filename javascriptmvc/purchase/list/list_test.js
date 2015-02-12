steal(
	'funcunit',
	'./list.js',
	'flying/models/purchase.js',
	'flying/models/fixtures',
	function(S, PurchaseList, Purchase, purchaseStore ){

	module("flying/purchase/list", { 
		setup: function(){
			$("#qunit-test-area").append("<div id='purchases'></div>");
			this.list = new PurchaseList("#purchases");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			purchaseStore.reset();
		}
	});
	
	test("lists all purchases", function(){
		stop();
		
		// retrieve purchases
		Purchase.findAll({}, function(purchases){
			// make sure they are listed in the page
			
			S(".purchase").size(purchases.length,function(){
				ok(true, "All purchases listed");
				
				start();
			})
		})
	});
	
	test("lists created purchases", function(){
		
		new Purchase({
			name: "Grilled Cheese",
			description: "grill cheese in bread"
		}).save();
		
		S('h3:contains(Grilled Cheese X)').exists("Lists created purchase");
	})
	
	
	test("delete purchases", function(){
		new Purchase({
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