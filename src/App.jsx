import React from 'react';
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
	return (
		<BrowserRouter>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/products' element={<Products />}></Route>

					<Route path='/products/:id' element={<ProductDetails />}>
						<Route path='' element={<ProductDetailInfo />}></Route>
						<Route path='nutrition' element={<ProductDetailNutrition />}></Route>
						<Route path='storage' element={<ProductDetailStorage />}></Route>
					</Route>
					
					<Route path='/cart' element={<Cart />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
