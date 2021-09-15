import React from 'react'
import PropTypes from 'prop-types'
import EmployeeItem from './EmployeeItem'

const Employees = ({employees, onDelete, onToggle}) => {

    return (
        <>
            {employees.map((employee)=>(<EmployeeItem  key={employee.id} employee={employee} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    )
}

Employees.propTypes = {
    employees: PropTypes.array,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func

}

export default Employees
