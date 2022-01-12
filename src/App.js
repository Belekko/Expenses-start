import React from 'react'
import Card from './components/Card'
import './App.css'
import Expenses from './components/Expenses/Expenses'

function App() {
	const data = [
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
		<Card >
			<h1>Let's get Started!</h1>
			<Expenses data={data}/>
			<p>Hello I'm Belek</p>
		</Card>
	)
}

export default App;
