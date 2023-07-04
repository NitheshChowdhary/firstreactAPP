import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
const Customer = () => {
    const[custst,custupdate]=useState([]);
    
    useEffect(()=>
    {
        fetch('http://localhost:8000/customer').then(res=>{
            return res.json();
        }).then(resp=>{
            custupdate(resp);
        }).catch((err)=>{
            console.log(err.message);
        });
    })
    const Navigate=useNavigate();
    const clickevent=()=>
    {
        Navigate(-1);
    }
    return (  
       <div>
        <div className="container">
            <div className="card">
            
                <div className="card-header">
                <h2>Customer List</h2>

                </div>
                <div className="card-body">
                    <div>
                        <Link className="btn btn-primary" to="/addcustomer">AddCustomer (+)</Link>
                    </div>
                 
            <table className="table table-bordered">
                <thead className="bg-dark text-white">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Area</td>
                        <td>State</td>
                        <td>Action</td>
                    </tr> 
                </thead>
                <tbody>
                    {
                        custst.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.area}</td>
                                <td>{item.state}</td>
                                <td>
                                    <a className="btn btn-primary">Edit</a>
                                    <a className="btn btn-danger">Remove</a>
                                </td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <button className="btn btn-danger" onClick={()=>clickevent()}>Undo</button>
                </div>
            </div>
        
        </div>   
            
       </div> 
    );
}
 
export default Customer;