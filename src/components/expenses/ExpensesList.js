import React, { useState, useEffect } from 'react';
import TagCard from './TagCard';
import axios from 'axios';

function ExpensesList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    axios.get('http://localhost:8000/')
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch expenses:', error);
      });
  }, []);

  return (
    <div>
      <TagCard data={data} />
    </div>
  );
}

export default ExpensesList;


