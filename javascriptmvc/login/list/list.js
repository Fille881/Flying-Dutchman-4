steal('can','./init.ejs', 'flying/models/login.js',
function (can, initEJS, Login) {
	/**
	 * @constructor flying/login/list
	 * @alias LoginList
	 * @parent flying
	 * @inherits can.Control
	 * Lists logins and lets you destroy them.
	 */
	return can.Control(
	/** @Static */
	{
		/**
		 * adding default options
		 */
		defaults : {
			Login: Login
		}
	},
	/** @Prototype */
	{
		/**
		 * Create a login list, render it, and make a request for finding all logins.
		 */
		init: function () {
			this.list = new Login.List();
			this.element.html(initEJS(this.list));
			this.list.replace(Login.findAll());
		},
		/**
		 * Click handler for destroy link.
		 */
		'.destroy click': function (el) {
			if (confirm("Are you sure you want to destroy?")) {
				el.closest('.login').data('login').destroy();
			}
		},
		/**
		 * Handler for login creation.  Pushes to the list of instances.
		 */
		"{Login} created": function (Model, ev, instance) {
			this.list.push(instance);
		}
	});
});