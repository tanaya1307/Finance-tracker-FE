import React from 'react';
import BarChart from '../components/common/BarChart';
import Card from '../components/common/Card';
import DonutChart from '../components/common/DonutChart';
const Dashboard = ({DarkMode}) => {

  return (

    
    <div className={`w-full h-inherit rounded-xl mt-5 flex flex-row justify-around  `}>
       
      <Card DarkMode={DarkMode}>
      <BarChart DarkMode={DarkMode}/>
     </Card>
     
     <Card DarkMode={DarkMode}>
      <DonutChart DarkMode={DarkMode}/>
     </Card>
    
      {/* Add more content here */}
    </div>
    
  );
};

export default Dashboard;