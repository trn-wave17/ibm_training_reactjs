import React from 'react'
import PropTypes from 'prop-types'
import '../css/EmployeeItem.css'
import { FaTimes } from 'react-icons/fa' 
import { Link } from 'react-router-dom'

const EmployeeItem = ({employee, onDelete, onToggle}) => {
    return (
        <Link to={`/employee/${employee.id}`} className="employee-link">
            <div className={`employee ${employee.active?'active':''}`} onDoubleClick={()=>onToggle(employee)}>
                <h3>{employee.name} <FaTimes style={{color:'red'}} onClick={()=>onDelete(employee.id)}/></h3>
                <p>{employee.email}</p>
            </div>
        </Link>
    )
}

EmployeeItem.propTypes = {
    employee: PropTypes.object,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func
}

export default EmployeeItem
