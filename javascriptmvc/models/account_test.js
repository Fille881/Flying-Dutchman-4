steal( "./account.js", 
	   "funcunit/qunit", 
	   "flying/models/fixtures", 
	   function( Account ){
	   	
	module("flying/models/account");
	
	test("findAll", function(){
		expect(4);
		stop();
		Account.findAll({}, function(accounts){
			ok(accounts, "findAll provides an object")
	        ok(accounts.length, "findAll provides something array-like")
	        ok(accounts[0].name, "findAll provides an object with a name")
	        ok(accounts[0].description, "findAll provides an object with a description")
			start();
		});
	});
	
	test("create", function(){
		expect(3)
		stop();
		new Account({name: "dry cleaning", description: "take to street corner"}).save(function(account) {
			ok(account, "save provides an object");
			ok(account.id, "save provides and object with an id");
			equals(account.name,"dry cleaning", "save provides an objec with a name")
			account.destroy()
			start();
		});
	});

	test("update" , function(){
		expect(2);
		stop();
		new Account({name: "cook dinner", description: "chicken"}).save(function(account) {
			equals(account.description,"chicken", "save creates with description");
			account.attr({description: "steak"}).save(function(account){
				equals(account.description,"steak", "save udpates with description");
				account.destroy();
				start();
			});
        });
	});

	test("destroy", function(){
		expect(1);
		stop();
		new Account({name: "mow grass", description: "use riding mower"}).destroy(function(account) {
			ok( true ,"Destroy called" )
			start();
		});
	});
});