steal('can', 'models/account.js', './init.ejs', 'jquery/dom/form_params',
	function (can, Account, initEJS) {

	/**
	 * @constructor flying/account/create
	 * @alias AccountCreate
	 * @parent flying
	 * @inherits can.Control
	 * Creates accounts
	 */
	return can.Control(
	/** @Prototype */
	{
		/**
		 *  Render the initial template
		 */
		init: function () {
			this.element.html(initEJS());
		},
		/**
		 *  Submit handler. Create a new account from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...')
			new Account(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset()
			});
		}
	});
});
