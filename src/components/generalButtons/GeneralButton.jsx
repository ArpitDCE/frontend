import React from "react";
import { Link } from "react-router-dom";

const GeneralButton = ({link,text,statusBar,custom,onShowComponent}) => {
  const button = ['a', 'b', 'c', 'd','']
  const cust=(text==="Customer"?['Add','Search','Update','Deactivate','']:text==="Order"?button:text==="Stock"?button:text==="Bill"?button:[])
  return (
    <div style={styles.floatingDiv} onClick={()=>{statusBar(text);custom(cust);onShowComponent(text);}}>
      <Link to={link}>{text}</Link>
    </div>
  );
};

const styles = {
  floatingDiv: {
    width: "10%",
    height: "20%",
    backgroundColor: "#f0f0f0",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "10px",
  },
};

export default GeneralButton;
