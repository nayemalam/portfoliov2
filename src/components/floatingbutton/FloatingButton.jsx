import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Link } from 'react-router-dom';

class FloatingButton extends Component {
    render () {
        return (
            <div className='floatingbutton'>
                <Fab size='small' aria-label='add' component={Link} to='/about'>
                    <TelegramIcon />
                </Fab>
            </div>
        )
    }
}

export default FloatingButton;