import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { addIncome } from '../../store/IncomeSlice';

function TotalIncome() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const dispatch = useDispatch();
    const incomeLocalStorage = localStorage.getItem('income');
    const initialIncome = incomeLocalStorage ? parseFloat(incomeLocalStorage) : '';
    const [income, setIncome] = React.useState(initialIncome);
    const [spendingRatio, setSpendingRatio] = React.useState(0);
  
    useEffect(() => {
      localStorage.setItem('income', income);
    }, [income]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const incomeData = {
        income: parseFloat(income),
        month: month,
      };
  
      axios
        .post('http://localhost:8000/incomes', incomeData)
        .then((response) => {
          console.log('Income created:', response.data);
          dispatch(addIncome({ income: response.data.income, month: response.data.month }));
        })
        .catch((error) => {
          console.error('Failed to create income:', error);
        });
    };
  
    useEffect(() => {
      async function fetchExpenseIncomeRatio() {
        try {
          const response = await axios.get('http://localhost:8000/expenses/sum');
          const totalExpenses = response.data.totalExpenses;
          const ratio = (totalExpenses / income) * 100;
          setSpendingRatio(ratio.toFixed(2));
        } catch (error) {
          console.error('Failed to calculate expense-income ratio:', error);
        }
      }
  
      fetchExpenseIncomeRatio();
    }, [income]);
  
    return (
      <div className='ml-20'>
        <h1 className='font-bold'>Enter your income for the current month</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={income || ''}
            onChange={(e) => setIncome(parseFloat(e.target.value))}
            placeholder='Enter Income'
            required
            className={`bg-transparent w-60 m-3 border-b-2 border-black`}
          />
          <button type='submit' className='bg-primary w-20 p-2 text-white text-sm rounded-md ml-2 hover:bg-white '>
            +
          </button>
        </form>
        <span className='m-1'>
          <AccountBalanceIcon />
        </span>{' '}
        {` Your Income for this month is ${parseInt(income)}`}
      
        <div className="rounded-2xl bg-white mt-3 w-full">
  <div className={`bg-yellow-400 rounded-l-2xl p-2 text-sm`} style={{ width: `${spendingRatio}%` }}>
   {spendingRatio}%
  </div>
</div>
<h2 className='font-bold'>expenses</h2>
      </div>
    );
  }
  



export default TotalIncome;

