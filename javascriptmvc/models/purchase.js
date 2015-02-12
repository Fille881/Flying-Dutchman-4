steal('can', function (can) {
	/**
	 * @constructor flying/models/purchase
	 * @alias Purchase
	 * @parent flying
	 * @inherits can.Model
	 *
	 * Wraps backend purchase services.
	 */
	return can.Model("Purchase",
	/* @static */
	{
		/**
 		 * Find all purchases (admin)
		 * Parameters:
		 * username
		 * password
		 */
		findAll : "GET /purchases",
		/**
 		 * Find one purchase (user)
		 * Parameters:
		 * username
		 * password
		 * 
		 */
		findOne : "GET /purchases/{beer_id}",
		/**
		 * Add a new purchase (user)
		 * Parameters:
		 * username
		 * password
		 * beer_id
		 */
		create : "POST /purchases/{id}"
	},
	/* @Prototype */
	{});
});
