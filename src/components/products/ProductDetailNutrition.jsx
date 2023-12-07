import { useOutletContext } from 'react-router-dom';

export default function ProductDetailNutrition() {
	const product = useOutletContext();
	const nutrition = product.nutrition;

	return (
		<table className='table table-nutrition'>
			<thead>
				<tr>
					<th>Nutrient</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Protein</td>
					<td>{nutrition.protein}g</td>
				</tr>
				<tr>
					<td>Carbohydrates</td>
					<td>{nutrition.carbs}g</td>
				</tr>
				<tr>
					<td>Fat</td>
					<td>{nutrition.fat}g</td>
				</tr>
				<tr>
					<td>Sodium</td>
					<td>{nutrition.sodium}g</td>
				</tr>
			</tbody>
		</table>
	);
}
