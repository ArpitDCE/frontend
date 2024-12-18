import React from "react";
import { useState } from "react";

const Search=()=>{
    const[Data,SetData]= useState({
        Name: "",
        Phone_no:"",
    })
    return(
<div className="wrapper">
    <form className="form-container">
        <div className="input-container">
            <label>Name:</label>
            <input type="text" placeholder="Name" value={Data.Name} onChange={(e)=>SetData({Name: e.target.value })}/>

        </div>
        <div className="input-container">
            <label>Phone_no:</label>
            <input type="text" placeholder="Phone_no." value={Data.Phone_no} onChange={(e)=>SetData({Phone_no: e.target.value })}/>

        </div>

        <button type="search" onClick={(e)=>(e.preventDefault())} className="font-serif text-2xl rounded-lg shadow-lg hover:bg-sky-800 text-white bg-sky-700">Search</button>
    </form>
</div>
    )

}
export default Search;