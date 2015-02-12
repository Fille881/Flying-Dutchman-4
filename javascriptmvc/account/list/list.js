steal('can','./init.ejs', 'models/account.js',
function (can, initEJS, Account) {
	/**
	 * @constructor flying/account/list
	 * @alias AccountList
	 * @parent flying
	 * @inherits can.Control
	 * Lists accounts and lets you destroy them.
	 */
	return can.Control(
	/** @Static */
	{
		/**
		 * adding default options
		 */
		defaults : {
			Account: Account
		}
	},
	/** @Prototype */
	{
		/**
		 * Create a account list, render it, and make a request for finding all accounts.
		 */
		init: function () {
			this.list = new Account.List();
			this.element.html(initEJS(this.list));
			this.list.replace(Account.findAll());
		},
		/**
		 * Click handler for destroy link.
		 */
		'.destroy click': function (el) {
			if (confirm("Are you sure you want to destroy?")) {
				el.closest('.account').data('account').destroy();
			}
		},
		/**
		 * Handler for account creation.  Pushes to the list of instances.
		 */
		"{Account} created": function (Model, ev, instance) {
			this.list.push(instance);
		}
	});
});
