import React, { Component } from 'react'
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import Form from '../components/contact/Form';
import HeaderDesc from '../components/headerdesc/HeaderDesc';

class Contact extends Component {
    render() {
        
        const headerText = 'Let\'s Connect!';
        const descText = 'Thanks to all ma homies, this is just a testing description ...';

        return (
            <div className='contact container'>
                <HTMLTitle title="Let's Talk | Nayem Alam" />
                
                <HeaderDesc header={headerText} desc={descText} />
                <Form />                
            </div>
        )
    }
}

export default Contact;