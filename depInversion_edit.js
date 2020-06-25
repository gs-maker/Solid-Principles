// refactored for Dependency Inversion
class Store {
	constructor(paymentProcessor) {
		this.paymentProcessor = paymentProcessor;
	}

	purchaseBike(quantity) {
		this.paymentProcessor.pay(200 * quantity);
	}

	purchaseHelmet(quantity) {
		this.paymentProcessor(15 * quantity);
	}
}

// stripe payment in Cents
class StripePaymentProcessor {
	constructor(user) {
		this.stripe = new Stripe(user);
	}
	pay(amountInCents) {
		this.stripe.makePayment(amountInCents * 100);
	}
}

// paypal payment in dollars
class PaypalPaymentProcessor {
	constructor(user) {
		this.user = user;
		this.paypal = new PayPal();
	}
	pay(amountInDollars) {
		this.paypal.makePayment(this.user, amountInDollars);
	}
}
const store = new Store(new StripePaymentProcessor("Nathaniel"));
// const store = new Store(new PaypalPaymentProcessor("Nathaniel"));
store.purchaseBike(2);
store.purchaseHelmet(2);
