import { Link } from "react-router-dom";
import React from "react";

const Appheader = () => {
    return ( 
        <div className="App-header">
            <Link to="/">Home</Link>
            <Link to="contact/">Contact</Link>
            <Link to="customer/">Customer</Link>
            
        </div>
     );
}
 
export default Appheader;