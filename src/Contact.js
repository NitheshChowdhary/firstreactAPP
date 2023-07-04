import { useState } from "react";
import ContactList from "./ContactList";
import React from "react";

const Contact = () => {
    let email="Nith2025@gmail.com"
    let addressobj={address1:'Rajampet',address2:'AndhraPradesh'}
    const[techList,listupdate]=useState([{id:1,Name:'React',Version:'1.0'},{id:2,Name:'Angular',Version:'3.0'},{id:3,Name:'Spring',Version:'3.0'}]);
    const removetech=(id)=>{
    console.log(id);
    const newlist=techList.filter(item=>item.id!==id);
    listupdate(newlist);
}
    
    return (
        <div>
            <ContactList title="Welcome to Contact Page" email={email} addobj={addressobj} techli={techList} removetech={removetech}></ContactList>      
       </div>
      );
}
 
export default Contact;