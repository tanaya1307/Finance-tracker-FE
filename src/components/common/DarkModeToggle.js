import React, { useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const DarkModeToggle = ({ darkModeEnabled, onDarkModeToggle }) => {
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkModeEnabled));
  }, [darkModeEnabled]);

  return (
    <div onClick={onDarkModeToggle} className="m-2 tex-primary">
      {darkModeEnabled ? <LightModeIcon /> : <DarkModeIcon />}
    </div>
  );
};

export default DarkModeToggle;

