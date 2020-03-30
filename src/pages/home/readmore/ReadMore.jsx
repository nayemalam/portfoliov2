import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

class ReadMore extends Component {

    render() {
        return (
            <div className='readmore'>
                <div style={{float: 'left', marginLeft: '150px'}}>
                    <a href="assets/offline-resume/Nayem - Resume 2019-2020.pdf" target="_blank" className="rm_btn">
                    Download CV
                    <FontAwesomeIcon icon={faCloudDownloadAlt} size='lg' style={{marginLeft: '15px'}}/>
                    </a>
                </div>
                <div style={{float: 'right', marginRight: '150px'}}>
                    <a href="mailto:nayem.alam@mail.mcgill.ca?subject=Hey Nayem! | From Website" className="rm_btn">
                    Read More
                    <FontAwesomeIcon icon={faAngleDoubleRight} size='lg' style={{marginLeft: '15px'}}/>
                    </a>
                </div>
            </div>
        )
    }
}

export default ReadMore;