import React ,{useState}from 'react';
import {Link,useLocation} from 'react-router-dom'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';


const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
 
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const activeLinkStyle = {
        
        color:"#5D37F6",
       
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
       
      
        <button className="absolute top-20 left-0 m-2 p-2 text-primary " onClick={handleSidebarToggle}>
          <WidgetsRoundedIcon className="text-xl " />
        </button>
    
        <div className={`fixed top-48 left-0 h-screen w-60 m-0 text-xl transition-all duration-300  ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} `}>
          <SidebarLink
            to="/"
            icon={<DashboardRoundedIcon />}
            text="Dashboard"
            isActive={activeLink === 'dashboard'}
            onClick={() => handleLinkClick('dashboard')}
            activeLinkStyle={activeLinkStyle}
          />
          <SidebarLink
            to="/expenses"
            icon={<AccountBalanceWalletRoundedIcon />}
            text="Expenses"
            isActive={activeLink === 'expenses'}
            onClick={() => handleLinkClick('expenses')}
            activeLinkStyle={activeLinkStyle}
          />
          <SidebarLink
            to="/budget"
            icon={<ArticleRoundedIcon />}
            text="Budget"
            isActive={activeLink === 'budget'}
            onClick={() => handleLinkClick('budget')}
            activeLinkStyle={activeLinkStyle}
          />
           <div>
          
        
        </div>
        
        </div>
        
    
    </>
  );
};

const SidebarLink = ({ to, icon, text, isActive, onClick, activeLinkStyle }) => {
  const linkStyle = isActive ? activeLinkStyle : {};

  return (
    <Link
      to={to}
      className="text-gray-500 p-2 mb-5 ml-2 flex items-center hover:text-primary font-bold w-full"
      style={linkStyle}
      onClick={onClick}
    >
      {icon}
      <span className="ml-4">{text}</span>
    </Link>
  );
};

 


export default Sidebar;
