import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'
import '../css/Header.css'

const Header = ({isFormVisible, onToggleForm}) => {

    const location = useLocation();

    return (
        <div>
            <h1 style={ headingStyle }>Employee Service</h1>
            <div className='btnAlign'>
                {location.pathname === '/' && <Button text={isFormVisible?'Close':'Add'} color={isFormVisible?'red':'green'} buttonClicked={onToggleForm}/>}
            </div>
        </div>
    )
}

Header.propTypes = {
    
}

const headingStyle = {
    display: 'inline'
}

export default Header
