import { useOutletContext } from 'react-router-dom';
import Button from '../UI/Button.jsx';

export default function ProductDetailInfo() {
	const product = useOutletContext();

	return (
		<>
			<p>
				{product.description} sold at <strong>€{product.price}</strong> per
				piece.
			</p>
			<Button>€{product.price}</Button>
		</>
	);
}
