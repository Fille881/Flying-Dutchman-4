steal('can', 'models/purchase.js', './init.ejs', 'jquery/dom/form_params',
	function (can, Purchase, initEJS) {

	/**
	 * @constructor flying/purchase/create
	 * @alias PurchaseCreate
	 * @parent flying
	 * @inherits can.Control
	 * Creates purchases
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
		 *  Submit handler. Create a new purchase from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...')
			new Purchase(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset()
			});
		}
	});
});
