import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class HTMLTitle extends Component {
    render() {
        return (
            <Helmet>
                <title>{this.props.title}</title>
            </Helmet>
        )
    }
}

export default HTMLTitle;