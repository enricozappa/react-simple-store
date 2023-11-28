import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Home></Home>
			<About></About>
			<Products></Products>
			<Cart></Cart>
		</>
	);
}

export default App;
