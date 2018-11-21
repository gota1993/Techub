import React from 'react'
import NavigationMain from '../Header/NavigationMain'

const FooterNavigation = (props) => (
    <div id="footer-navigation">
        <div className="navigation">
            <div className="navigation-left">
                <p>Dopos</p>
            </div>
            
            <NavigationMain />

            <div className="navigation-right-footer">
                <div>
                    <i className="fab fa-facebook-square"></i> <i className="fab fa-twitter-square"></i> <i className="fab fa-vuejs"></i>
                    <i className="fas fa-camera-retro"></i>
                </div>
            </div>
        </div>
    </div>
)

export default FooterNavigation 