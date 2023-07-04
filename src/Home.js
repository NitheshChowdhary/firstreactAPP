import { useEffect, useState } from "react";
import React from "react";

const Home = () => {
    const HomeClick = (name)=>{
        console.log(pagetitle);
        titlch('Button clicked');
        console.log(pagetitle);
        console.log(name);
    }
    const[pagetitle,titlch]=useState('HomePage');
    const obj={name:'Nithesh'};
    useEffect(()=>
    {
        console.log("Output");
    });
    return ( 
        <div>
            <h2>{pagetitle}</h2>  
            <h2>{obj.name}</h2>  
            <button className="btn btn-primary" onClick={()=>HomeClick('Parameters')}  >CLick</button>
       </div>
     );
}
 
export default Home;