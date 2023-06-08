import React from 'react'
import Card from '../components/common/Card'
import GoalForm from '../components/budget/GoalForm'
import Goals from '../components/budget/Goals'
import BudgetList from '../components/budget/BudgetList'

function BudgetPage() {
  return (
    <div id='budget' className='flex flex-row gap-5'>
      <div>
      <Card>
        <BudgetList/>
      </Card>
      <Card>
        <div className='m-5 p-2'>
        <GoalForm/>
        </div>
      </Card>
      </div>
      <div>
        <Goals/>
      </div>
     
    </div>
  )
}

export default BudgetPage