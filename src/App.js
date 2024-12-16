import React, { useState } from 'react';
import GeneralButton from './components/general/GeneralButton';
import SpecificButton from './components/specific/SpecificButton';
import Header from './components/header/Header';
import StatusBar from './components/statusbar/StatusBar';
import Add from "./components/modules/customer/add/Add";
import Search from "./components/modules/customer/search/Search";
import Update from "./components/modules/customer/update/Update";
import Deactivate from "./components/modules/customer/deactivate/Deactivate";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css"

function App() {
  const [SB,setSB]=useState("")
  const [customer,setCustomer]=useState([])
  const [activeComponent, setActiveComponent] = useState(null);
  const buttonG = [];
  const button = ['Customer', 'Order', 'Stock', 'Bill'];
  
  for (let i = 0; i < 4; i++) {
    buttonG.push(<GeneralButton key={i} statusBar={setSB} custom={setCustomer} text={button[i]} />);
  }

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Add":
        return <Add />;
      case "Search":
        return <Search />;
      case "Update":
        return <Update />;
      case "Deactivate":
        return <Deactivate />;
      default:
        return null;
    }
  };

  return (
    <Router>
    <>
    <Routes>
  <Route path="/add" element={<Add />} />
  <Route path="/search" element={<Search />} />
  <Route path="/update" element={<Update />} />
  <Route path="/deactivate" element={<Deactivate />} />
  </Routes>
    <Header />
    <div className='container'>
      {buttonG}
    </div>
    
    {activeComponent && (
  <div className='component-container'>{renderActiveComponent()}</div>
)}

<div className='statusbar-container'>
    <StatusBar text={SB} />
    </div>
    
    <div className='fotter'>
    <SpecificButton customer={customer} onShowComponent={setActiveComponent}/>
    </div>
    </>
    </Router>
  );
};
export default App;
