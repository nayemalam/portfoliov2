import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

class EditPage extends Component {
    render() {
        return (
            <div className='editpage bottomRight'>
                Help improve this page on GitHub <a style={{color: '#00d1b2', marginLeft: '2px'}} href={this.props.link} aria-label="edit icon"><FontAwesomeIcon icon={faEdit} size='1x'/></a> 
            </div>
        )
    }
}

export default EditPage;
