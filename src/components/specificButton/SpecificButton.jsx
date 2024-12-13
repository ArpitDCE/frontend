import React from "react";

const SpecificButton = ({ customer}) => {
  const buttonS = [];

  const numberOfButtons = Math.min(customer.length, 5);

  for (let i = 0; i < numberOfButtons; i++) {
    buttonS.push(
      <div key={i} style={styles.floatingDiv}>
        {customer[i]}
      </div>
    );
  }

  return (
    <>
      {buttonS}
    </>
  );
};

const styles = {
  floatingDiv: {
    width: "10vw",
    height: "15vh",
    backgroundColor: "#f0f0f0",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "10px",
  },
};

export default SpecificButton;
