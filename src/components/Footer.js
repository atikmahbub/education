import React from 'react'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="d-flex justify-content-between align-items-center footer">
            <div>© Education Academy 2021</div>
            <div><FaFacebookF size="24px"/></div>
            <div>contact@educationacademy.xyz</div>
        </div>
    )
}

export default Footer
