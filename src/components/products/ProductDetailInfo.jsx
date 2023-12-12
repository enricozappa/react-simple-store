import { useOutletContext } from 'react-router-dom';
import Button from '../UI/Button.jsx';

export default function ProductDetailInfo(props) {
	const product = useOutletContext();
	const { onProductAdd } = props;

	return (
		<>
			<p>
				{product.description} sold at <strong>€{product.price}</strong> per
				piece.
			</p>
			<Button onClick={() => onProductAdd(product)}>€{product.price}</Button>
		</>
	);
}
