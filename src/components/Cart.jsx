import { useState } from 'react';
import Button from './UI/Button.jsx';
import Input from './UI/Input.jsx';
import { loadStripe } from '@stripe/stripe-js';

// Initialize stripe with a test API key
const stripeLoadedPromise = loadStripe(
	'pk_test_51OEonqBafvVzdiY4P8QTwuxFpe7KsDwjZRSwSV0hkp9LlqkEU5K1iUb99oknqODkHncgXOq6LQQsycvD5cDzsRFt00PWgjtfjn'
);

export default function Cart(props) {
	const { cart } = props;
	const [email, setEmail] = useState('');
	const totalCartPrice = cart.reduce((total, cartItem) => {
		return total + cartItem.price * cartItem.quantity;
	}, 0);

	function handleFormSubmit(event) {
		event.preventDefault();

		// Cycle through cart items to generate checkout stripe array
		const stripeLineItems = cart.map((cartItem) => {
			return {
				price: cartItem.price_id,
				quantity: cartItem.quantity,
			};
		});

		stripeLoadedPromise.then((stripe) => {
			stripe
				.redirectToCheckout({
					lineItems: stripeLineItems,
					mode: 'payment',
					successUrl: 'https://simple-react-store-77c11.web.app',
					cancelUrl: 'https://simple-react-store-77c11.web.app',
					customerEmail: email,
				})
				.then((response) => {
					// Log error if redirect did not work
					console.error(response.error);
				})
				.catch((error) => {
					// Log error if API key is wrong
					console.error(error);
				});
		});
	}

	return (
		<div className='cart-layout'>
			{cart.length > 0 && (
				<>
					<table className='table table-cart'>
						<thead>
							<tr>
								<th width='25%' className='th-product'>
									Product
								</th>
								<th width='20%'>Unit price</th>
								<th width='10%'>Quantity</th>
								<th width='25%'>Total</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((cartItem, index) => (
								<tr key={index}>
									<td>
										<img width='30' height='30' alt='' src={cartItem.image} />
										{cartItem.name}
									</td>
									<td>€{cartItem.price}</td>
									<td>{cartItem.quantity}</td>
									<td>
										<strong>
											€{(cartItem.price * cartItem.quantity).toFixed(2)}
										</strong>
									</td>
								</tr>
							))}
						</tbody>
						<tfoot>
							<tr>
								<th colSpan='2'></th>
								<th className='cart-highlight'>Total</th>
								<th className='cart-highlight'>€{totalCartPrice.toFixed(2)}</th>
							</tr>
						</tfoot>
					</table>

					<form className='pay-form' onSubmit={handleFormSubmit}>
						<p>
							Enter your email and then click on pay and your products will be
							delivered to you!
						</p>
						<Input
							required
							autoComplete='email'
							placeholder='Email'
							type='email'
							value={email}
							onInput={(event) => setEmail(event.target.value)}
						/>
						<Button type='submit'>Pay</Button>
					</form>
				</>
			)}

			{cart.length === 0 && (
				<div>
					<h1>Your Cart</h1>
					<p>You have not added any product to your cart yet.</p>
				</div>
			)}
		</div>
	);
}
