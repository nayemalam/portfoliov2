import React, { Component } from 'react';

class Hamburger extends Component {
    // mobile menu functionality using states
    state = {
        isOpen: false
    }

    render() {
        console.log(this.state.isOpen)
        return (
            <div className='hamburger'>
                <div className={this.state.isOpen ? 'menu-toggler open' : 'menu-toggler'}
                onClick={ ()=> this.setState({isOpen: !this.state.isOpen})}
                >
                    <div className='bar half start'></div>
                    <div className='bar'></div>
                    <div className='bar half end'></div>
                </div>
            </div>
        )
    }
}

export default Hamburger;