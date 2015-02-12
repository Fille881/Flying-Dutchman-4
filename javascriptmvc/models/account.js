steal('can', function (can) {
	/**
	 * @constructor flying/models/account
	 * @alias Account
	 * @parent flying
	 * @inherits can.Model
	 *
	 * Wraps backend Account balance service
	 */
	return can.Model( "Account",
	/* @static */
	{
		/**
		 * Find all account balances (admin)
		 */
		findAll : "GET /accounts/",

		/**
 		 * Find one account's balance (user)
		 */
		findOne : "GET /accounts/{username}",

		/**
		  * Find user ID by username
		  * Seems impossible at the moment, nevermind this!
		  */
		// findID : "GET /accounts/id/{user}",

		/**
		 * Update funds on account
		 */
		update : "PUT /accounts/{username}/"
	},
	/* @Prototype */
	{});
});

