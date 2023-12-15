import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Cart from './components/Cart.jsx';
import Products from './components/products/Products.jsx';
import ProductDetails from './components/products/ProductDetails.jsx';
import ProductDetailInfo from './components/products/ProductDetailInfo.jsx';
import ProductDetailNutrition from './components/products/ProductDetailNutrition.jsx';
import ProductDetailStorage from './components/products/ProductDetailStorage.jsx';

function App() {
	const [cart, setCart] = useState(() => {
		let savedCart = [];

		try {
			savedCart = JSON.parse(localStorage.getItem('cart')) || [];
		} catch (error) {
			savedCart = [];
		}

		return savedCart;
	});

	useEffect(() => {
		if (cart) {
			localStorage.setItem('cart', JSON.stringify(cart));
		}

		// Check for 'paymentSuccess' parameter on URL
		const urlParams = new URLSearchParams(window.location.search);
		const paymentSuccess = urlParams.get('paymentSuccess');

		// Empty cart after successful payment
		if (paymentSuccess === 'true') {
			setCart([]);
		}
	}, [cart]);

	function handleProductAdd(newProduct) {
		const existingProduct = cart.find(
			(cartProduct) => cartProduct.id === newProduct.id
		);

		let updatedCart;

		if (existingProduct) {
			// Update existing product quantity
			updatedCart = cart.map((cartItem) => {
				if (cartItem.id === newProduct.id) {
					return { ...cartItem, quantity: cartItem.quantity + 1 };
				}

				return cartItem;
			});
		} else {
			// Add a new product that doesn't exists
			updatedCart = [...cart, { ...newProduct, quantity: 1 }];
		}

		// Update cart
		setCart(updatedCart);
	}

	function handleProductDelete(id) {
		const existingProduct = cart.find((cartProduct) => cartProduct.id === id);

		if (existingProduct) {
			const updatedCart = cart.filter((cartItem) => cartItem.id !== id);

			setCart(updatedCart);
		}
	}

	return (
		<BrowserRouter>
			<Navbar cart={cart} />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route
						path='/products'
						element={
							<Products
								cart={cart}
								onProductAdd={handleProductAdd}
								onProductDelete={handleProductDelete}
							/>
						}
					></Route>

					<Route path='/products/:id' element={<ProductDetails />}>
						<Route
							path=''
							element={<ProductDetailInfo onProductAdd={handleProductAdd} />}
						></Route>
						<Route
							path='nutrition'
							element={<ProductDetailNutrition />}
						></Route>
						<Route path='storage' element={<ProductDetailStorage />}></Route>
					</Route>

					<Route path='/cart' element={<Cart cart={cart} />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
