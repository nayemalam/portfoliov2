import React, { Component } from 'react';
import TimelineItem from './TimelineItem';

class Timeline extends Component {
    render() {
        return (
            <ul className='timeline'>
                {(this.props.items || []).map((item, id) => (
                    <TimelineItem
                        key={id}
                        icon={item.icon}
                        date={item.date}
                        name={item.name}
                        location={item.location}
                        role={item.role}
                        desc={item.desc}
                    />
                ))}
            </ul> 
        )
    }
}

export default Timeline;