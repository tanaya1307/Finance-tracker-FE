import React from 'react'
import ExpensesList from '../components/expenses/ExpensesList'
import ExpensesForm from '../components/expenses/ExpensesForm'
import TotalIncome from '../components/expenses/TotalIncome'
import PreviousMonthsData from '../components/expenses/PreviousMonthsData'
function ExpensesPage() {
  return (
    <div id='expenses'>
      <div className='flex flex-row gap-10'>
      <ExpensesForm/>
      <TotalIncome/>
      <PreviousMonthsData/>
      </div>
   
    <ExpensesList/>
    
    </div>
  )
}

export default ExpensesPage