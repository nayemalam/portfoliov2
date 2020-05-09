import React, { Component } from 'react'
import HTMLTitle from '../components/htmltitle/HTMLTitle';
import Form from '../components/contact/Form';

class Contact extends Component {
    render() {
        return (
            <div className='contact container'>
                <HTMLTitle title="Let's Talk | Nayem Alam" />
                
                <h2 className='customHeader upperCaseAll centerText'>let's connect</h2>
                <Form />                
            </div>
        )
    }
}

export default Contact;