steal( "./payment.js", 
	   "funcunit/qunit", 
	   "flying/models/fixtures", 
	   function( Payment ){
	   	
	module("flying/models/payment");
	
	test("findAll", function(){
		expect(4);
		stop();
		Payment.findAll({}, function(payments){
			ok(payments, "findAll provides an object")
	        ok(payments.length, "findAll provides something array-like")
	        ok(payments[0].name, "findAll provides an object with a name")
	        ok(payments[0].description, "findAll provides an object with a description")
			start();
		});
	});
	
	test("create", function(){
		expect(3)
		stop();
		new Payment({name: "dry cleaning", description: "take to street corner"}).save(function(payment) {
			ok(payment, "save provides an object");
			ok(payment.id, "save provides and object with an id");
			equals(payment.name,"dry cleaning", "save provides an objec with a name")
			payment.destroy()
			start();
		});
	});

	test("update" , function(){
		expect(2);
		stop();
		new Payment({name: "cook dinner", description: "chicken"}).save(function(payment) {
			equals(payment.description,"chicken", "save creates with description");
			payment.attr({description: "steak"}).save(function(payment){
				equals(payment.description,"steak", "save udpates with description");
				payment.destroy();
				start();
			});
        });
	});

	test("destroy", function(){
		expect(1);
		stop();
		new Payment({name: "mow grass", description: "use riding mower"}).destroy(function(payment) {
			ok( true ,"Destroy called" )
			start();
		});
	});
});