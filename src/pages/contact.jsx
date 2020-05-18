import React, { Component } from 'react'
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import Form from '../components/contact/Form';
import HeaderDesc from '../components/headerdesc/HeaderDesc';

class Contact extends Component {
    render() {
        
        const headerText = 'Let\'s Connect';
        const descText = 'One of the things I enjoy doing the most is genuinely meeting new people. If you\'d like to grab coffee for a casual talk, or just talk business, don\'t hesitate to reach out!';

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