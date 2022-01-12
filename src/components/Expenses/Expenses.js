import React from 'react'
import './Expenses.css'
import Card from '../Card'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
	return (
		<Card className='expense'>
			{props.data.map((e, id) => (
				<ExpenseItem
					title={e.title}
					amount={e.amount}
					date={e.date}
					key={id}
				/>
			))}
		</Card>
	)
}

export default Expenses
