import React, { Component } from 'react';
import Timeline from '../timeline/Timeline';
import educationItems from '../../data/EducationItems';

class Education extends Component {
    render() {
        return (
            <div className='education'>
                <h3 className='titleWithBackground'>Education</h3>
                <Timeline 
                    items={educationItems}
                />
            </div>
        )
    }
}

export default Education;