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
		findAll : "GET /beers",
		/**
 		 * Find one beer
		 */
		findOne : "GET /beers/{id}",
		/**
 		 * Create a beer
		 */
		create : "POST /beers",
		/**
		 * Update a beer
		 */
		update : "PUT /beers/{id}" /*function(data)
		{
			var id = data[0];
			var user = data[1];
			var pass = data[2];
			var amount = data[3];
			var price = data[4];
			return $.post("/beers/"+id+"?"+user+"&"+pass+"&"+amount+"&"+price,
				   {
				   });
		}*/
	},
	/* @Prototype */
	{name:"",
	id:0,
	description:""});
});
