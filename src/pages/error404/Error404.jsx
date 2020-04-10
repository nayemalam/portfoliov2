import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EyeRolling from '../../images/common/404.gif'

class Error404 extends Component {
    render () {
        return (
            <div className='error404 container'>
                <div>
                    <img src={EyeRolling} alt='404Image' width='225' />
                    <h1 style={{fontSize: '100px', marginTop: '-60px', marginBottom: '-15px'}}>404</h1>
                    <p>Uh oh ... The page you are trying to access does not exist.</p>
                    <p>Let's get you back home.</p>
                    <Link to='/' style={{textDecoration: 'none'}}>
                    <Button variant='contained' color='primary'>Go Home</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Error404;
