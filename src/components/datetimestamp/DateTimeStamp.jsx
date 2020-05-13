import React, { Component } from 'react';
import preval from 'preval.macro';

class DateTimeStamp extends Component {

    render () {
        // module.exports = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});

        const dateTimeStamp = preval`
        module.exports = new Date().toLocaleString();
        `

        return (
            <div className='datetimestamp'>
                <p className='date'>Last updated: {dateTimeStamp} </p>
            </div>
        )    
    }
}
    
export default DateTimeStamp;