class Store {
	constructor(user) {
		this.paypal = new PayPal();
		this.user = user;
		// this.stripe = new Stripe(user);
	}

	purchaseBike(quantity) {
		this.paypal.makePayment(this.user, 200 * quantity);
		// this.stripe.makePayment(200 * quantity * 100);
	}

	purchaseHelmet(quantity) {
		this.paypal.makePayment(this.user, 15 * quantity);
		// this.stripe.makePayment(15 * quantity * 100);
	}
}

// stripe payment in Cents
class Stripe {
	constructor(user) {
		this.user = user;
	}

	makePayment(amountInCents) {
		console.log(`${this.user} made a payment of $${amountInCents / 100} with Stripe`);
	}
}

// paypal payment in dollars
class PayPal {
	makePayment(user, amountInDollars) {
		console.log(`${user} made a payment of $${amountInDollars} with PayPal`);
	}
}

const store = new Store("Nathaniel");
store.purchaseBike(2);
store.purchaseHelmet(2);
