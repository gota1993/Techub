import React from 'react'
import Button from '../../OtherComponents/Button'

const SectionOutClientsMainDiv = (props) => (
    <div className='div-our-clients'>
        <div>
            <p className='p-our-clients'>Our Clients</p>
        </div>
        <div>
            <div>
                <i className="fab fa-apple"></i>
                <i className="fab fa-android"></i>
                <i className="fab fa-facebook"></i>
            </div>
        </div>
        <div>
            <Button text={'VIEW ALL'} />
        </div>
    </div>
)

export default SectionOutClientsMainDiv