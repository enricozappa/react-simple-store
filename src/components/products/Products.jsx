import { useState, useEffect } from 'react';
import Product from './Product.jsx';
import useFetch from '../helpers/useFetch.jsx';
import Loader from '../UI/Loader.jsx';

export default function Products(props) {
	const [products, setProducts] = useState([]);
	const { get, loading } = useFetch(
		'https://simple-store-database-default-rtdb.europe-west1.firebasedatabase.app/'
	);
	const { cart, onProductAdd, onProductDelete } = props;

	useEffect(() => {
		get('products.json')
			.then((data) => {
				setProducts(data);
			})
			.catch((error) => console.log('Could not load products', error));
	}, []);

	return (
		<div className='products-layout'>
			<h1>Products</h1>
			<p>Take a look at our products</p>
			<div className='products-grid'>
				{loading && <Loader />}
				{products.map((product) => {
					return (
						<Product
							key={product.id}
							details={product}
							cart={cart}
							onProductAdd={onProductAdd}
							onProductDelete={onProductDelete}
						/>
					);
				})}
			</div>
		</div>
	);
}
