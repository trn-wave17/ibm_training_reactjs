import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

const AddEmployee = ({onAdd}) => {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[active, setActive] = useState(false);

    const formSubmitted = (e)=>{
        e.preventDefault();
        //Validate fields
        if(!name){
            alert("Name can't be empty");
            return;
        }

        const employee = {name, email, active};
        onAdd(employee);

        setName("");
        setEmail("");
        setActive(false);
    }

    return (
       <form className="employee-form" onSubmit={formSubmitted}>
           <div className="form-control">
               <label>Name</label>
               <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
           </div>
           <div className="form-control">
               <label>Email</label>
               <input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           <div className="form-control form-control-check">
               <label>Active</label>
               <input type="checkbox" value={active} checked={active} onChange={(e)=>setActive(e.currentTarget.checked)}/>
           </div>
            <input className="btn btn-block" type="submit" value="Add Employee"/>
       </form>
    )
}

AddEmployee.propTypes = {

}

export default AddEmployee
