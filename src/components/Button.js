import React from 'react'
import PropTypes from 'prop-types'


const Button = ({text, color, buttonClicked}) => {
    
    return (
        <div>
            <button className='btn' style={{backgroundColor:color}} onClick={buttonClicked}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    buttonClicked: PropTypes.func

}

export default Button
