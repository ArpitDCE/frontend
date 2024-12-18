import React, { useState } from "react";

const Search =()=>{

    
    const[Data,SetData]= useState({
        Name: "",
        Phone_no:"",
    })
    const details=[{id:1 ,Name:"Ishan",Customer_Id: 123,Phone_no: 9647384645},
        {id:2 ,Name:"Arpit",Customer_Id: 234,Phone_no: 964464765 },
        {id:3 ,Name:"Shishupal",Customer_Id: 563,Phone_no: 9647643675},
    ]
    return(
        <div className=" flex-col  text-center  h-screen w-full border-1 ">
            <div className="flex gap-3 rounded-lg shadow-lg  p-3 justify-content  align-items  w-[650px] h-[60px] bg-slate-300 border-1 overflow-hidden ">
                <input className="p-1 h-[30px] w-[250px]" type="text" value={Data.Name} onChange={(e)=>SetData({
                    Name: e.target.value
                })} placeholder="type name"/>
                 <input className="p-1 h-[30px] w-[250px]"type="text" value={Data.Phone_no} onChange={(e)=>SetData({
                    Phone_no: e.target.value
                })} placeholder="type ph number"/>

                <button className="h-[30px] w-[110px] text-xl pl-2 font-serif bg-sky-600 hover:bg-sky-700 p-1 text-white">Search</button>
            </div>
            

<div className="w-full max[550px] mt-4 overflow-hidden rounded-lg shadow-lg bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Customer ID</th>
              <th className="px-4 py-2 border-b">Phone No</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail) => (
              <tr
                key={detail.id}
                className={`${
                  (detail.id) % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-50`}
              >
                <td className="px-4 py-2 border-b">{detail.Name}</td>
                <td className="px-4 py-2 border-b">{detail.Customer_Id}</td>
                <td className="px-4 py-2 border-b">{detail.Phone_no}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
        
    )

}


export default Search;