
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddCustomer = () => {
const[name,namechange]=useState('');
const[area,areachange]=useState('');
const[state,statechange]=useState('');
const navigate=useNavigate();
const handlesubmit=(e)=>{
    e.preventDefault();
    const custobj={name,area,state};
    console.log(custobj)
    fetch("http://localhost:8000/customer",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(custobj)
    }).then(res=>{
        alert('Saved successfully.');
        navigate('customer');
    }).catch((err)=>{
        console.log(err.message)
    })

}

    return (  
        <div>
           
            <form className="container" onSubmit={handlesubmit}>
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                            <h2>AddCustomer</h2>

                            </div>
                            <div className="card-body">
                                <div className="=form-group">
                                    <label>Name</label>
                                    <input value={name} onChange={e=>namechange(e.target.value)} className="form-control"></input>

                                </div>
                                <div className="=form-group">
                                    <label>Area</label>
                                    <input value={area} onChange={e=>areachange(e.target.value)}className="form-control"></input>

                                </div>
                                <div className="=form-group">
                                    <label>State</label>
                                    {/*<input className="form-control"></input>*/}
                                    <select value={state} onChange={e=>statechange(e.target.value)} className="form-control">
                                        <option value={"AndhraPradesh"}>AndhraPradesh</option>
                                        <option value={"Hyderabad"}>Hyderabad</option>
                                        <option value={"Telangana"}>Telangana</option>
                                        <option value={"Texas"}>Texas</option>
                                    </select>

                                </div>

                            </div>
                            <div className="card-footer">
                                <button className="btn btn-success">Save</button>

                            </div>

                        </div>

                    </div>
                </div>

            </form>
        </div>    );
}
 
export default AddCustomer
