import React from 'react'
import Button from '../../OtherComponents/Button'

const Section4Left = (props) => (
    <div className='section4-left'>

        <div className='featured-title'>
            <p>
                INSIGHTS
                    </p>
        </div>

        <div>
            <p className='headline-font'>
                Latest <br /> Blog Sports
            </p>
        </div>

        <div className='subscribe-div'>
            <hr />
            <p>
                Subscribe to receive <br /> free email updates
                    </p>
            <p>Quisque ut quis sagittis!</p>
            <input type="text" name="email" placeholder="Enter your email" id="" />
        </div>

        <div>
            <Button text={'LEARN MORE'}/>
        </div>

    </div>
)

export default Section4Left