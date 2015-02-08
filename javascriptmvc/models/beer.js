steal('can', function (can) {
	/**
	 * @constructor models/beer
	 * @alias Beer
	 * @parent flying
	 * @inherits can.Model
	 *
	 * Wraps backend beer services.
	 */
	return can.Model("Beer",
	/* @static */
	{
		/**
 		 * Find all beers
		 */
		findAll : function()
		{
			 return $.get("/beers",
						 {
						 });
		},
		/**
 		 * Find one beer
		 */
		findOne : function(data)
		{
			var id = data[0];
			var user = data[1];
			var pass = data[2];
			return $.get("/beers/"+id+"/"+user+"/"+pass,
						{
						});
		},
		/**
 		 * Create a beer
		 */
		create : "POST /beers",
		/**
		 * Update a beer
		 */
		update : function(data)
		{
			var id = data[0];
			var user = data[1];
			var pass = data[2];
			var amount = data[3];
			var price = data[4];
			return $.post("/beers/"+id+"?"+user+"&"+pass+"&"+amount+"&"+price,
				   {
				   });
		},
		/**
		 * Destroy a beer
		 */
		destroy : "DELETE /beers/{id}"
	},
	/* @Prototype */
	{name:"",
	id:0,
	description:""});
});
