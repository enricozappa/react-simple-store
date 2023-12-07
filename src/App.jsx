import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Products from './components/products/Products.jsx';
import Cart from './components/Cart.jsx';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/products' element={<Products />}></Route>
					<Route path='/cart' element={<Cart />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
