import React, { Component } from 'react';

class FloatingHamburger extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            isOpen: false
        }

    }

    render() {
        return (
            <div className='floatinghamburger'>
                <div className='bars' onClick={() => this.setState({isOpen: !this.state.isOpen})}>
                    <div className={this.state.isOpen ? 'topchapeau open' : 'topchapeau'}> &lt; </div>
                    <div className={this.state.isOpen ? 'bottomchapeau open' : 'bottomchapeau'}> &lt; </div>
                </div>
            </div>
        )
    }
}

export default FloatingHamburger;