import React from 'react';

const Header = () => {
  return (
    <>
      <header style={styles.header}>
        <div style={styles.centered}>Grocer</div>
        <div>Login/SignUp</div>
      </header>
    </>
  );
};

export default Header;

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "#f1f1f1",
    padding: "10px",
    fontWeight: "bold",
    position: 'relative', 
  },
  centered: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};
