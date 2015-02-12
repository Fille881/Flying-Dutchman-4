steal('can','./init.ejs', 'models/purchase.js',
function (can, initEJS, Purchase) {
	/**
	 * @constructor flying/purchase/list
	 * @alias PurchaseList
	 * @parent flying
	 * @inherits can.Control
	 * Lists purchases and lets you destroy them.
	 */
	return can.Control(
	/** @Static */
	{
		/**
		 * adding default options
		 */
		defaults : {
			Purchase: Purchase
		}
	},
	/** @Prototype */
	{
		/**
		 * Create a purchase list, render it, and make a request for finding all purchases.
		 */
		init: function () {
			this.list = new Purchase.List();
			this.element.html(initEJS(this.list));
			this.list.replace(Purchase.findAll());
		},
		/**
		 * Click handler for destroy link.
		 */
		'.destroy click': function (el) {
			if (confirm("Are you sure you want to destroy?")) {
				el.closest('.purchase').data('purchase').destroy();
			}
		},
		/**
		 * Handler for purchase creation.  Pushes to the list of instances.
		 */
		"{Purchase} created": function (Model, ev, instance) {
			this.list.push(instance);
		}
	});
});
