import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const About = props => {
    return (
        <div>
            Address: New Delhi<br/>
            <Link to="/">Go Back</Link>
        </div>
    )
}

About.propTypes = {

}

export default About
