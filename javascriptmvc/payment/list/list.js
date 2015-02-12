steal('can','./init.ejs', 'models/payment.js',
function (can, initEJS, Payment) {
	/**
	 * @constructor flying/payment/list
	 * @alias PaymentList
	 * @parent flying
	 * @inherits can.Control
	 * Lists payments and lets you destroy them.
	 */
	return can.Control(
	/** @Static */
	{
		/**
		 * adding default options
		 */
		defaults : {
			Payment: Payment
		}
	},
	/** @Prototype */
	{
		/**
		 * Create a payment list, render it, and make a request for finding all payments.
		 */
		init: function () {
			this.list = new Payment.List();
			this.element.html(initEJS(this.list));
			this.list.replace(Payment.findAll());
		},
		/**
		 * Click handler for destroy link.
		 */
		'.destroy click': function (el) {
			if (confirm("Are you sure you want to destroy?")) {
				el.closest('.payment').data('payment').destroy();
			}
		},
		/**
		 * Handler for payment creation.  Pushes to the list of instances.
		 */
		"{Payment} created": function (Model, ev, instance) {
			this.list.push(instance);
		}
	});
});
