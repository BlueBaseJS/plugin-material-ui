import PropTypes from 'prop-types';
import React from 'react';
import { Table } from '..';
import { TableBody } from '../../TableBody';
import { TableCell } from '../../TableCell';
import { TableHead } from '../../TableHead';
import { TableRow } from '../../TableRow';

const styles = (theme: { spacing: { unit: number } }) => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
});

let id = 0;
function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
	id += 1;
	return { id, name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function SimpleTable(props: { classes: any }) {
	const {} = props;

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>Dessert (100g serving)</TableCell>
					<TableCell>Calories</TableCell>
					<TableCell>Fat (g)</TableCell>
					<TableCell>Carbs (g)</TableCell>
					<TableCell>Protein (g)</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map(row => (
					<TableRow key={row.id}>
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.calories}</TableCell>
						<TableCell>{row.fat}</TableCell>
						<TableCell>{row.carbs}</TableCell>
						<TableCell>{row.protein}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

SimpleTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default SimpleTable;
