steal('can', 'flying/models/login.js', './init.ejs', 'jquery/dom/form_params',
	function (can, Login, initEJS) {

	/**
	 * @constructor flying/login/create
	 * @alias LoginCreate
	 * @parent flying
	 * @inherits can.Control
	 * Creates logins
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
		 *  Submit handler. Create a new login from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...')
			new Login(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset()
			});
		}
	});
});