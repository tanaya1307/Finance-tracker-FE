import React, { useState } from 'react';
import axios from 'axios';
function GoalForm() {
  const [goal, setGoal] = useState('');
  const [requiredBudget, setRequiredBudget] = useState('');
  const [savedSum, setSavedSum] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a goal object with the form data
    const goalData = {
      goal: goal,
      requiredBudget: parseInt(requiredBudget),
      savedSum: parseInt(savedSum),
    };
    axios
    .post('http://localhost:8000/goals', goalData)
    .then((response) => {
      console.log('Goal created:', response.data);})
    
    setGoal('');
    setRequiredBudget('');
    setSavedSum('');
  };

  return (
    <div className='p-3 '>
      <h2 className='font-bold mb-2'>Add Goal</h2>
      
      <form onSubmit={handleSubmit} className='flex flex-row gap-3'>
        <div>
          
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Enter goal"
            required
          />
        </div>
        <div>
          
          <input
            type="number"
            value={requiredBudget}
            onChange={(e) => setRequiredBudget(e.target.value)}
            placeholder="Enter required budget"
            required
          />
        </div>
        <div>
        
          <input
            type="number"
            value={savedSum}
            onChange={(e) => setSavedSum(e.target.value)}
            placeholder="Enter saved sum"
            required
          />
        </div>
        <button type ='submit' className={`bg-primary p-2 rounded-lg w-20 hover:bg-yellow-400`}>Add</button>
      </form>
    </div>
  );
}

export default GoalForm;

