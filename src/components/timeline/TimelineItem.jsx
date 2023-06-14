import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TimelineItem extends Component {
  render() {
    return (
      // styles under timeline
      <li className="timeline-item" data-aos="fade">
        <div className="timeline-icon">
          <FontAwesomeIcon className="timeline-fa" icon={this.props.icon} />
        </div>
        <div className="timeline-content">
          <p className="timeline-date">{this.props.date}</p>
          <p className="timeline-name">{this.props.name}</p>
          <p className="timeline-location">{this.props.location}</p>
          <p className="timeline-role">{this.props.role}</p>
          <span className="timeline-brief-desc">{this.props.desc}</span>
        </div>
      </li>
    );
  }
}

export default TimelineItem;
