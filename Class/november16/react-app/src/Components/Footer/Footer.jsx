import React from 'react'

const Footer = (props) => (
    <div id='footer'>

        <div>
            <p>
                &copy; 1996-2018 Dopos. <br /> All rights reserved.
        </p>
        </div>

        <div>
            <p>General inquiries: <br /> <span class='footer-white'>hello@depos.studio</span></p>
        </div>

        <div>
            <p>Press inquiries: <br /> <span class='footer-white'>press@depos.studio</span></p>
        </div>

        <div>
            <ul className='footer-white'>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
            </ul>
        </div>

    </div>
)

export default Footer