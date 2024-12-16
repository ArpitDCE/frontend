import React, { useState } from 'react';
import GeneralButton from './components/generalButtons/GeneralButton';
import SpecificButton from './components/specificButton/SpecificButton';
import Header from './components/header/Header';
import StatusBar from './components/statusbar/StatusBar';
import Customer from "./pages/customer/Customer"
import Bill from "./pages/bill/Bill"
import Order from "./pages/order/Order"
import Stock from "./pages/stock/Stock"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [SB,setSB]=useState("")
  const [customer,setCustomer]=useState([])
  const [activeComponent, setActiveComponent] = useState(null);
  const links=['/customer','/order','/stock','/bill']
  const buttonG = [];
  const button = ['Customer', 'Order', 'Stock', 'Bill',''];
  
  for (let i = 0; i < 4; i++) {
    buttonG.push(<GeneralButton key={i} link={links[i]} statusBar={setSB} custom={setCustomer} text={button[i]} onShowComponent={setActiveComponent}/>);
  }

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Customer":
        return <Customer />;
      case "Order":
        return <Order />;
      case "Stock":
        return <Stock />;
      case "Bill":
        return <Bill />;
      default:
        return null;
    }
  };

  return (
    <Router>
    <>
    <Routes>
  <Route path="/customer" element={<Customer />} />
  <Route path="/order" element={<Order />} />
  <Route path="/stock" element={<Stock />} />
  <Route path="/bill" element={<Bill />} />
  </Routes>
    <Header />
    <div style={styles.container}>
      {buttonG}
    </div>
    <div style={styles.componentContainer}>{renderActiveComponent()}</div>
    <div style={styles.sbcontainer}>
    <StatusBar text={SB}/>
    </div>
    <div style={styles.container2}>
    <SpecificButton customer={customer}/>
    </div>
    </>
    </Router>
  );
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '70vh',
    padding: '10px',
    paddingBottom: '10px',
  },
  container2: {
    display: 'flex',
    flex: 0.2,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '10vh',
    padding: '10px',
  },
  sbcontainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "10px",
    paddingBottom:"15px"
  },
  componentContainer:{
    position:'absolute',
    top:'15vh',
    right:'40vw'
  }
};

export default App;
