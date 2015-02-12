steal('can', function (can) {
	/**
	 * @constructor flying/models/payment
	 * @alias Payment
	 * @parent flying
	 * @inherits can.Model
	 *
	 * Wraps backend payment services.
	 */
	return can.Model("Payment",
	/* @static */
	{
		/**
 		 * Find all payments (admin)
		 */
		findAll : "GET /payments",
		/**
 		 * Find one payment (user)
		 */
		findOne : "GET /payments/{id}",
		/**
 		 * Add a payment (user)
		 */
		create : "POST /payments"
	},
	/* @Prototype */
	{});
});
