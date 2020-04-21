import React, { Component } from 'react';

class Hamburger extends Component {

    render() {
        // this.props.openMenu gets the toggleDrawer state from MobileMenu.jsx
        console.log("mobile menu open? " + this.props.openMenu)

        return (
            <div className='hamburger'>
                <div className={this.props.openMenu ? 'menu-toggler open' : 'menu-toggler'}
                onClick={()=> this.props.openMenu}
                role='presentation'
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