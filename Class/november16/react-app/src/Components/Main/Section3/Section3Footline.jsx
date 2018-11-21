import React from 'react'
import Button from '../../OtherComponents/Button'


const Section3Footline = (props) => (
    <div className="section3-footline">

        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium nesciunt iusto dignissimos facere sint excepturi
                asperiores vero delectus beatae non.
            </p>
            <Button text={'CASE STUDY'}/>
        </div>

        <div>

            <div>
                <div>CATEGORY</div>
                <div className='headline-font'>Design &<br />Branding</div>
                <div>
                    <hr />
                </div>
            </div>

            <div>
                <div>CLIENT</div>
                <div className='headline-font'>Cusco<br />Barista</div>
                <div>
                    <hr />
                </div>
            </div>

        </div>

    </div>
)

export default Section3Footline