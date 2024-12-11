import React from 'react';

const StatusBar = () => {
  return (
    <>
      <div style={styles.statusbar}>StatusBar</div>
    </>
  );
};

const styles = {
  statusbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f1f1f1",
    padding: "10px",
    fontWeight: "bold",
  },
};

export default StatusBar;
