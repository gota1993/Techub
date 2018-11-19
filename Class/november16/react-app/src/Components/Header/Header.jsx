import React from 'react'
import NavigationLeft from './NavigationLeft'
import NavigationMain from './NavigationMain'
import NavigationRight from './NavigationRight'

const Header = (props) => (
    <header>
        <div className="navigation">
            <NavigationLeft />
            <NavigationMain />
            <NavigationRight />
        </div>
    </header>
)

export default Header