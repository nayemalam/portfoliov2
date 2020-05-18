import React, { Component } from 'react';
import HeaderDesc from '../components/headerdesc/HeaderDesc';

export default class Speaking extends Component {

    render() {
        const headerText = 'My Fondest Moments';
        const descText = 'Thanks to all ma homies, this is just a testing description ...';

        return (
            <div className='speaking container'>
                <HeaderDesc header={headerText} desc={descText} />
                
            </div>
        )
    }
}
