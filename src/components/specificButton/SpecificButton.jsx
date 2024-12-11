import React from "react";


const SpecificButton = ({text}) => {
  return (
    <div style={styles.floatingDiv}>
      {text}
    </div>
  );
};

const styles = {
  floatingDiv: {
    width: "20%",
    height: "20%",
    backgroundColor: "#f0f0f0",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "10px",
  },
};

export default SpecificButton;;
