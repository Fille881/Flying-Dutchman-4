steal('can', 'models/payment.js', './init.ejs', 'jquery/dom/form_params',
	function (can, Payment, initEJS) {

	/**
	 * @constructor flying/payment/create
	 * @alias PaymentCreate
	 * @parent flying
	 * @inherits can.Control
	 * Creates payments
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
		 *  Submit handler. Create a new payment from the form.
		 */
		submit: function (el, ev) {
			ev.preventDefault();
			el.find('[type=submit]').val('Creating...')
			new Payment(el.formParams()).save(function() {
				el.find('[type=submit]').val('Create');
				el[0].reset()
			});
		}
	});
});
