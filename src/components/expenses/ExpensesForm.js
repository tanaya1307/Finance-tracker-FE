import { useState } from 'react';
import Card from '../common/Card'
import axios from 'axios'; 

function ExpensesForm() {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [month, setMonth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an expense object with the form data
    const expenseData = {
      expense: expense,
      amount: parseFloat(amount),
      description: description,
      tag: tag,
      month: month,
    };

    // Send a POST request to create the expense
    axios
      .post('http://localhost:8000/expenses', expenseData)
      .then((response) => {
        console.log('Expense created:', response.data);

        // Reset the form fields
        setExpense('');
        setAmount('');
        setDescription('');
        setTag('');
        setMonth('');
      })
      .catch((error) => {
        console.error('Failed to create expense:', error);
        // Handle error scenarios (display error message, etc.)
      });
  };

  return (
    <div className='ml-12 '>
      <form onSubmit={handleSubmit} >
        <h2 className='font-bold ml-2'>Add your expenses for the month</h2>
        <div className='flex flex-col'>
        <input
          type='text'
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
          placeholder='Enter Expense'
          required
          className={`bg-transparent w-60 m-3 border-b-2 border-black`}
        />
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='Enter amount'
          required
          className={`bg-transparent w-60 m-3 border-b-2 border-black`}
        />
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter description'
          required
          className={`bg-transparent w-60 m-3 border-b-2 border-black`}
        />
        <input
          type='text'
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder='Enter tag'
          required
          className={`bg-transparent w-60 m-3 border-b-2 border-black`}
        />
        <input
          type='date'
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          placeholder='Enter month'
          required
          className={`bg-transparent w-60 m-3 border-b-2 border-black`}
        />
        </div>
        <button type='submit' className='bg-primary w-20 p-2 text-white text-sm rounded-md ml-2 hover:bg-white hover:text-black'>Add</button>
      </form>
    </div>
  );
}


export default ExpensesForm