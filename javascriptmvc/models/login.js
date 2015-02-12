steal('can', function (can) {
	/**
	 * @constructor flying/models/login
	 * @alias Login
	 * @parent flying
	 * @inherits can.Model
	 *
	 * Wraps backend login services.
	 */
	return can.Model( "Login",
	/* @static */
	{
		/**
 		 * Retreive a JSON with user-information. (User)
		 * Parameters:
		 * username
		 * password
		 */
		findOne : "GET /logins/{username}",
		/**
		  * Retrieve a JSON with user-information for an administrator. (Admin)
		  * Parameters:
		  * username
		  * password
		  */
		findOneAdmin : "GET /logins/admin/{username}"
	},
	/* @Prototype */
	{});
});
