import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const EmployeeDescription = (props) => {

    let { id } = useParams();

    const [employee, setEmployee] =  useState({name:"",email:"",active:false});
    
    useEffect(() => {
        const getEmployee = async() =>{
            setEmployee(await fetchEmployee(id))
        }

        getEmployee();

    }, [])

    const fetchEmployee = async(id) =>{
        let response = await axios.get(`http://localhost:5000/employees/${id}`);
        return response.data;
    }



    return (
        <div>

            <h3>{employee.name}</h3>
            <p>{employee.email}</p>
            
        </div>
    )
}

EmployeeDescription.propTypes = {

}

export default EmployeeDescription
