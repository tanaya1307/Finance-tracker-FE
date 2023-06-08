import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Goals() {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    axios.get('http://localhost:8000/goals')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch expenses:', error);
      });
  }, []);
  const handleAddSum = (itemId, amount) => {
    const endpoint = `http://localhost:8000/goals/${itemId}`;

    axios.post(endpoint, { amount })
      .then(response => {
        console.log('Sum added successfully:', response.data);
        // Update the data in the state or refetch the updated data
      })
      .catch(error => {
        console.error('Failed to add sum:', error);
      });
  };

  return (
    <>
      <div className='w-96 h-[25rem] bg-white rounded-[2.5rem] fixed ml-72 flex flex-col align-middle text-center ' >
        Goals
      {data.map((i) => (

          <div className='bg-red-100 p-3 mt-5 rounded-lg text-sm flex flex-row gap-10 font-bold w-80 ml-8 ' key={i.goal}>
            {i.goal}
            <div className="rounded-xl h-5 bg-yellow-400  " >
              <span className=' p-1 text-sm' style={{width:`${((i.saved_sum / i.required_budget) * 100).toFixed(2)}%`}}>
              {i.required_budget === 0
                ? 'N/A'
                : `${((i.saved_sum / i.required_budget) * 100).toFixed(2)}%`} </span>
            </div>
            <div className="addSum">
              <input type='number' className='w-14 p-1 rounded-md' placeholder='amt' onChange={(e) => setAmount(e.target.value)} />
              <button className='ml-3 p-1 rounded-md bg-yellow-400' onClick={() => handleAddSum(i.id, amount)}>+</button>
            </div>
          </div>
       
      ))}
       </div>
    </>
  );
}

export default Goals;
