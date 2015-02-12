steal( "./purchase.js", 
	   "funcunit/qunit", 
	   "flying/models/fixtures", 
	   function( Purchase ){
	   	
	module("flying/models/purchase");
	
	test("findAll", function(){
		expect(4);
		stop();
		Purchase.findAll({}, function(purchases){
			ok(purchases, "findAll provides an object")
	        ok(purchases.length, "findAll provides something array-like")
	        ok(purchases[0].name, "findAll provides an object with a name")
	        ok(purchases[0].description, "findAll provides an object with a description")
			start();
		});
	});
	
	test("create", function(){
		expect(3)
		stop();
		new Purchase({name: "dry cleaning", description: "take to street corner"}).save(function(purchase) {
			ok(purchase, "save provides an object");
			ok(purchase.id, "save provides and object with an id");
			equals(purchase.name,"dry cleaning", "save provides an objec with a name")
			purchase.destroy()
			start();
		});
	});

	test("update" , function(){
		expect(2);
		stop();
		new Purchase({name: "cook dinner", description: "chicken"}).save(function(purchase) {
			equals(purchase.description,"chicken", "save creates with description");
			purchase.attr({description: "steak"}).save(function(purchase){
				equals(purchase.description,"steak", "save udpates with description");
				purchase.destroy();
				start();
			});
        });
	});

	test("destroy", function(){
		expect(1);
		stop();
		new Purchase({name: "mow grass", description: "use riding mower"}).destroy(function(purchase) {
			ok( true ,"Destroy called" )
			start();
		});
	});
});