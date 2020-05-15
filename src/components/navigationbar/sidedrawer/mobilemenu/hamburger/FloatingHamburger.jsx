import React, { Component } from 'react';

class FloatingHamburger extends Component {
    render() {
        return (
            <div className='floatinghamburger'>
                <div className={this.props.isOpen ? 'topchapeau open' : 'topchapeau'}> &lt; </div>
                <div className={this.props.isOpen ? 'bottomchapeau open' : 'bottomchapeau'}> &gt; </div>
            </div>
        )
    }
}

export default FloatingHamburger;