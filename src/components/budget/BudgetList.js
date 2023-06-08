import React, { useState } from 'react';
import axios from 'axios';

function BudgetList() {
  const [educationBudget, setEducationBudget] = useState(1000);
  const [groceryBudget, setGroceryBudget] = useState(0);
  const [recreationalBudget, setRecreationalBudget] = useState(0);
  const [familyBudget, setFamilyBudget] = useState(0);
  const [clothesBudget, setClothesBudget] = useState(0);
  const month= new Date().getMonth()+1;
  const monthNames = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  const handleUpdate = () => {
    const budgetData = {
      month:month, 
      education: educationBudget,
      grocery: groceryBudget,
      recreational: recreationalBudget,
      family: familyBudget,
      clothes: clothesBudget,

    };

    // Send the budget data to the endpoint
    axios.post('http://localhost:8000/budget', budgetData)
      .then(response => {
        console.log('Budget updated successfully');
      })
      .catch(error => {
        console.error('Failed to update budget:', error);
      });
  };

  return (
    <div className='w-fit p-8 font-bold'>
       <span className=''> Budget for the month of {monthNames[month]}</span>
      <div className="education mt-2 flex flex-row gap-56">
        <label htmlFor="education-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Education </label>
        <input
          id="education-range"
          type="range"
          min="0"
          max="50000"
          value={educationBudget}
          step="1000"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1 accent-primary dark:bg-gray-700"
          onChange={(e) => setEducationBudget(parseFloat(e.target.value))}
        />
        {educationBudget}
      </div>
      <div className="grocery flex  flex-row gap-56 ">
        <label htmlFor="grocery-range" className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white">Grocery </label>
        <input
          id="grocery-range"
          type="range"
          min="0"
          max="5000"
          value={groceryBudget}
          step="100"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none mt-1 cursor-pointer accent-primary dark:bg-gray-700"
          onChange={(e) => setGroceryBudget(parseFloat(e.target.value))}
        />
        {groceryBudget}
      </div>
      <div className="recreational flex flex-row gap-56">
        <label htmlFor="recreational-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recreational </label>
        <input
          id="recreational-range"
          type="range"
          min="0"
          max="5000"
          value={recreationalBudget}
          step="100"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1 accent-primary dark:bg-gray-700"
          onChange={(e) => setRecreationalBudget(parseFloat(e.target.value))}
        />
        {recreationalBudget}
      </div>
      <div className="family flex flex-row gap-56 ">
        <label htmlFor="family-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Family </label>
        <input
          id="family-range"
          type="range"
          min="0"
          max="5000"
          value={familyBudget}
          step="100"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1 accent-primary dark:bg-gray-700"
          onChange={(e) => setFamilyBudget(parseFloat(e.target.value))}
        />
        {familyBudget}
      </div>
      <div className="clothes flex flex-row gap-56">
        <label htmlFor="clothes-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Clothes </label>
        <input
          id="clothes-range"
          type="range"
          min="0"
          max="5000"
          value={clothesBudget}
          step="100"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-1 accent-primary dark:bg-gray-700"
          onChange={(e) => setClothesBudget(parseFloat(e.target.value))}
        />
        {clothesBudget}
      </div>
      <button  className={`bg-primary p-2 rounded-lg w-20 hover:bg-yellow-400 `} onClick={handleUpdate}>update</button>

    </div>
  );
}

export default BudgetList;
