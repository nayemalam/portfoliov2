import React, { Component } from 'react';
import Timeline from '../timeline/Timeline';
import workItems from '../../data/WorkExperienceItems';

class WorkExperience extends Component {
    render() {
        return (
            <div className='workexperience'>
                <h3 className='titleWithBackground'>Work Experience</h3>
                <Timeline 
                    items={workItems}
                />
            </div>
        )
    }
}

export default WorkExperience;