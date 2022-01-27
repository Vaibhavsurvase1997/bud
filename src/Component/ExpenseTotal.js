import React from 'react';
import { Button } from 'react-bootstrap';

const ExpenseTotal = () => {
	return (
		<div className='alert alert-success'>
			<span>Please enter your Expense<hr/><input></input></span>
            
            <hr/>
            <span>Please enter your Expense ammount<hr/><input></input></span><hr/>
            <Button>Add Expense</Button>
		</div>
	);
};

export default ExpenseTotal;