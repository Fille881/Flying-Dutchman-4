steal(
	'funcunit',
	'./list.js',
	'flying/models/payment.js',
	'flying/models/fixtures',
	function(S, PaymentList, Payment, paymentStore ){

	module("flying/payment/list", { 
		setup: function(){
			$("#qunit-test-area").append("<div id='payments'></div>");
			this.list = new PaymentList("#payments");
		},
		teardown: function(){
			$("#qunit-test-area").empty();
			paymentStore.reset();
		}
	});
	
	test("lists all payments", function(){
		stop();
		
		// retrieve payments
		Payment.findAll({}, function(payments){
			// make sure they are listed in the page
			
			S(".payment").size(payments.length,function(){
				ok(true, "All payments listed");
				
				start();
			})
		})
	});
	
	test("lists created payments", function(){
		
		new Payment({
			name: "Grilled Cheese",
			description: "grill cheese in bread"
		}).save();
		
		S('h3:contains(Grilled Cheese X)').exists("Lists created payment");
	})
	
	
	test("delete payments", function(){
		new Payment({
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