import React, { useState } from 'react';
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
	const [cart, setCart] = useState([]);

	function handleProductAdd(newProduct) {
		console.log(`Adding product ${newProduct.id}`);
	}

	function handleProductDelete(id) {
		console.log(`Deleting product ${id}`);
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
