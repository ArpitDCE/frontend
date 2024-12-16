import React from "react";
import "../../index.css";

const GeneralButton = ({text,statusBar,custom}) => {
  const customer=['Add','Search','Update','Deactivate']
  const order=['Add','Search','Update','Deactivate']
  const stock=['Add','Search','Update','Deactivate']
  const bill=['Add','Search','Update','Deactivate']
  const cust=(text==="Customer"?customer:text==="Order"?order:text==="Stock"?stock:text==="Bill"?bill:[])

  return (
    <div className="floating-div" onClick={()=>{statusBar(text);custom(cust);}}>
      {text}
    </div>
  );
};


export default GeneralButton;



