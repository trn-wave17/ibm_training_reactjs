import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <footer class="footer">
            <p>Copyright &copy; IBM 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

Footer.propTypes = {

}

export default Footer
