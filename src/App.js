import React, { useState } from 'react';
import GeneralButton from './components/generalButtons/GeneralButton';
import SpecificButton from './components/specificButton/SpecificButton';
import Header from './components/header/Header';
import StatusBar from './components/statusbar/StatusBar';
function App() {
  const [SB,setSB]=useState("")
  const [customer,setCustomer]=useState([])
  const buttonG = [];
  const button = ['Customer', 'Order', 'Stock', 'Bill',''];
  
  for (let i = 0; i < 4; i++) {
    buttonG.push(<GeneralButton key={i} statusBar={setSB} custom={setCustomer} text={button[i]}/>);
  }

  return (
    <>
    <Header />
    <div style={styles.container}>
      {buttonG}
    </div>
    <div style={styles.sbcontainer}>
    <StatusBar text={SB}/>
    </div>
    <div style={styles.container2}>
    <SpecificButton customer={customer}/>
    </div>
    </>
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
  }
};

export default App;
