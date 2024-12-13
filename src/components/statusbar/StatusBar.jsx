import React from 'react';

const StatusBar = ({text}) => {
  return (
    <>
      <div style={styles.statusbar}>{text?text:"StatusBar"}</div>
    </>
  );
};

const styles = {
  statusbar: {
    //backgroundColor: "#f1f1f1",
    padding: "10px",
    fontWeight: "bold",
  },
};

export default StatusBar;
