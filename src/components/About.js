import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const About = props => {
    return (
        <div>
            Address: New Delhi<br/>
            <NavLink to="/">Go Back</NavLink>
        </div>
    )
}

About.propTypes = {

}

export default About
