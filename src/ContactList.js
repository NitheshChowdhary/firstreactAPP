import React from "react";
const ContactList = ({title,email,addobj,techli,removetech}) => {
    return ( 
        <div>
            <h1>{title}</h1>
            <h2>Email:{email}</h2>
            <h3>{addobj.address1}</h3>
            <h3>{addobj.address2}</h3>
     <div style={{textAlign:'center'}}>
            <h1>Array List</h1>
            {
                techli.map((item)=>(
                    <div key={item.id} style={{border:'1px solid blue',margin:'30px'}}>
                        <h3>TechID is {item.id}</h3>
                        <h3>TechName is {item.Name}</h3>
                        <h3>TechVersion is {item.Version}</h3>
                        <button onClick={()=>removetech(item.id)} className="btn btn-danger">Remove</button>
                    </div>
                ))
            } 
            
    </div>
        </div>
     );
    
}
 
export default ContactList;