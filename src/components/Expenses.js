/* import ExpenseItem from './ExpenseItem'

function Expenses() {
	const expenses = [
		{
			id: 1,
			title: 'Toilet Paper',
			amount: 1.5,
			date: new Date(2021, 7, 14),
		},
		{
			id: 2,
			title: 'Car Insuranse',
			amount: 200,
			date: new Date(2021, 2, 28),
		},
		{
			id: 3,
			title: 'FastFood',
			amount: 2.9,
			date: new Date(2021, 8, 18),
		},
		{
			id: 4,
			title: 'Course',
			amount: 150,
			date: new Date(2021, 9, 1),
		},
		{
			id: 5,
			title: 'Transport',
			amount: 4.7,
			date: new Date(2021, 10, 4),
		},
	]
	return (
		<div className='App'>
			<ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			/>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			/>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			/>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			/>
			<ExpenseItem
				title={expenses[4].title}
				amount={expenses[4].amount}
				date={expenses[4].date}
			/>
		</div>
	)
}

export default Expenses */

import ExpenseItem from './ExpenseItem'

function Expenses() {
	const expenses = [
		{
			id: 1,
			title: 'Toilet Paper',
			amount: 1.5,
			date: new Date(2021, 7, 14),
		},
		{
			id: 2,
			title: 'Car Insuranse',
			amount: 200,
			date: new Date(2021, 2, 28),
		},
		{
			id: 3,
			title: 'FastFood',
			amount: 2.9,
			date: new Date(2021, 8, 18),
		},
		{
			id: 4,
			title: 'Course',
			amount: 150,
			date: new Date(2021, 9, 1),
		},
		{
			id: 5,
			title: 'Transport',
			amount: 4.7,
			date: new Date(2021, 10, 4),
		},
	]

	return (
		<div className='App'>
			{expenses.map((e) => (
				<ExpenseItem title={e.title} amount={e.amount} date={e.date} />
			))}
		</div>
	)
}

export default Expenses
