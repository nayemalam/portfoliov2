import React, { Component } from 'react';
import MetaTags from '../components/metatags/MetaTags';
import HeaderDesc from '../components/headerdesc/HeaderDesc';
import EditPage from '../components/editpage/EditPage';
import VideoPlayer from '../components/speaking/VideoPlayer';

export default class Speaking extends Component {

    render() {
        const headerText = 'My Fondest Moments';
        const descText = 'Since my grade 7 days I\'ve had such a force for speaking. I simply enjoy talking about making a difference and making an impact. I myself grew up learning that, to get to the place you want to be in tomorrow you will have to push with nothing but shear determination, consistency and hard work.';

        return (
            <div className='speaking container'>
                <MetaTags title='Speaker | Nayem Alam' />

                <HeaderDesc header={headerText} desc={descText} />
                <VideoPlayer />
                <EditPage link={'https://github.com/nayemalam/portfoliov2/blob/dev/src/pages/speaking.jsx'} />
            </div>
        )
    }
}
