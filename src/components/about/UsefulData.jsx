import React, { Component } from 'react';
import ShowHideButton from '../showhidebutton/ShowHideButton';
import usefulDataItems from '../../data/UsefulDataItems';

class UsefulData extends Component {
    render() {
        return (
            <div className='usefuldata'>
                <h3>Some other data you might not be interested in ...</h3>
                <ShowHideButton 
                    btnclass={'btn'}
                    txtclass={'dataItems'}
                    readLessText={'nvm'} 
                    readMoreText={'👀 I\'m interesed'}
                    text={usefulDataItems}>
                </ShowHideButton>
            </div>
        )
    }
}

export default UsefulData;