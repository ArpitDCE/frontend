import React from "react";
import "../../index.css"

const SpecificButton = ({ customer, onShowComponent }) => {
  const buttonS = [];
  const links = ["/add", "/search", "/update", "/deactivate"];
  const numberOfButtons = Math.min(customer.length, links.length);

  for (let i = 0; i < numberOfButtons; i++) {
    buttonS.push(
      <div
        key={i}
        className="floating-div"
        onClick={() => {onShowComponent(customer[i])}}
        oncl={()=>onShowComponent(null)}
        tabIndex={0}
      >
        {customer[i]}
      </div>
    );
  }

  return <>{buttonS}</>;
};

export default SpecificButton;
