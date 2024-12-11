import React from 'react';
import GeneralButton from './components/generalButtons/GeneralButton';
import SpecificButton from './components/specificButton/SpecificButton';
import Header from './components/header/Header';
import StatusBar from './components/statusbar/StatusBar';
function App() {
  const buttonG = [];
  const buttonS = [];
  const button = ['Customer', 'Order', 'Bill', 'text'];
  
  for (let i = 0; i < 4; i++) {
    buttonG.push(<GeneralButton key={i} text={button[i]}/>);
    buttonS.push(<SpecificButton key={i} text={button[i]}/>);
  }

  return (
    <>
    <Header />
    <div style={styles.container}>
      {buttonG}
    </div>
    <StatusBar />
    <div style={styles.container2}>
      {buttonS}
    </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '75vh',
    padding: '10px',
    paddingBottom: '10px',
  },
  container2: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '10px',
  }
};

export default App;
