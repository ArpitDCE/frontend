import React from 'react';
import "../../index.css"
const StatusBar = ({text}) => {
  return (
    <>
      <div className="statusbar-container">
    <div className="statusbar">
        <div>Screen: {text ? text : "StatusBar"}</div>
        <div>Status: 200</div>
        <div>Message: done</div>
    </div>
    </div>
      
    </>
  );
};


export default StatusBar;
