import React, { useState, useEffect } from 'react';
import {  Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/ExpensesPage';
import Budget from './pages/BudgetPage';
import DarkModeToggle from './components/common/DarkModeToggle';
import Card from './components/common/Card';
import Sidebar from './components/common/SideBar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem('darkMode');
    return storedPreference ? JSON.parse(storedPreference) : false;
  });

  const toggleDarkMode = () => {
    const updatedMode = !isDarkMode;
    setIsDarkMode(updatedMode);
    localStorage.setItem('darkMode', JSON.stringify(updatedMode));
  };

  return (
    <div className={`app grid grid-cols-auto h-screen  ${isDarkMode ? 'bg-stone-900' : 'bg-white'}`}>
      <div className={`content ml-80 w-auto  mt-5 grid-cols-3 m-5 p-5 rounded-[3rem] ${isDarkMode ? 'bg-zinc-800' : 'bg-slate-100'}`}>
    
        <Sidebar darkMode={isDarkMode} />
        
        <div className={`p-5 rounded-[2.5rem] h-full  grid-cols-3 ${isDarkMode ? 'bg-zinc-800' : 'bg-slate-100'}`}>
        <div className="">
        
        <DarkModeToggle darkModeEnabled={isDarkMode} onDarkModeToggle={toggleDarkMode} /></div>
          <Routes>
            <Route path="/" element={<Dashboard DarkMode={isDarkMode} />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/budget" element={<Budget />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;



