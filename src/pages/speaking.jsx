import React, { Component } from 'react';
import HeaderDesc from '../components/headerdesc/HeaderDesc';

export default class Speaking extends Component {

    render() {
        const headerText = 'My Fondest Moments';
        const descText = 'Since my grade 7 days I\'ve had such a force for speaking. I simply enjoy talking about making a difference and making an impact. I myself grew up learning that, to get to the place you want to be in tomorrow you will have to push with nothing but shear determination, consistency and hard work.';

        return (
            <div className='speaking container'>
                <HeaderDesc header={headerText} desc={descText} />
                
            </div>
        )
    }
}
