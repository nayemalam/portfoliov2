import React, { Component } from 'react';

class FloatingHamburger extends Component {
    render() {
        return (
            <div className='floatinghamburger'>
                <div className={this.props.isOpen ? 'leftchapeau open' : 'leftchapeau'}> &lt; </div>
                <div className={this.props.isOpen ? 'rightchapeau open' : 'rightchapeau'}> &gt; </div>
            </div>
        )
    }
}

export default FloatingHamburger;