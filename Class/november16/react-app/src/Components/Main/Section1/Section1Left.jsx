import React from 'react'
import BigButton from '../../OtherComponents/BigButton'


const Section1Left = (props) => (
    <div className="section1-left">

        <div>
            <p className='headline-font'>
                Creative Design & Advertising
            </p>
        </div>

        <div>

            <div>
                <i className="fas fa-align-justify"></i>
            </div>

            <div>
                <p>
                    Proin pharetra volutpat est dictum.
                    Cras pharetra molestie et laoreet tortor accumsan quis
                </p>
            </div>

        </div>

        <div>
            <BigButton text={['LEARN MORE', <i className="fas fa-chevron-right"></i>]}/>
        </div>

        <div>
            <p>
                <i className="fas first-circle fa-circle"></i> 
                <i className="fas second-circle fa-circle"></i>
                <i className="fas fa-circle"></i>
                <i className="fas fa-circle"></i>
            </p>
        </div>

    </div>
)

export default Section1Left