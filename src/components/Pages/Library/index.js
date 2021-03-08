import React, { useState, useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { library } from '../../../data';
import {COLUMNS} from './assets/columns';

const Library = () => {
	const [toggleButton, setToggleButton] = useState(false);
	
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => library, []);

	const {getTableProps, 
		getTableBodyProps, 
		headerGroups, 
		rows, 
		prepareRow} = useTable({
			columns,
			data			
		}, useSortBy)

	window.onscroll = () => {
		if (window.pageYOffset > 700) setToggleButton(true);
		else setToggleButton(false);
	};

	return (
		<div className='library'>
			{toggleButton && (
				<div className='text-right btn-up'>
					<button
						type='button'
						className='btn'
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						<i className="fas fa-arrow-up btn-up-icon"/>
						Go up
					</button> 
				</div>
			)}
			<h2 className='heading heading-primary'>
				Library
				<div className='underline'></div>
			</h2>
			<h3 className='heading heading-tertiary text-secondary'>
				Please contact the Librarian at the meeting to borrow books from the
				Library.
			</h3>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render('Header')}
									<span style={{float: "right"}}>
										{column.isSorted ? (column.isSortedDesc ? <i class="fas fa-arrow-down" /> : <i class="fas fa-arrow-up" />) : ''}
									</span>
								</th>
							))}
					</tr>
					))}
					
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row)
						return(
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	);	
};

export default Library;