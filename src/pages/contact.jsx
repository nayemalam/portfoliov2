import React, { Component } from 'react'
import PageTitle from '../components/pagetitle/PageTitle';
import Form from '../components/contact/Form';

class Contact extends Component {
    render() {
        return (
            <div className='contact container'>
                <PageTitle title="Let's Talk | Nayem Alam" />
                
                <h2 className='customHeader upperCaseAll centerText'>let's connect</h2>
                <Form />                
            </div>
        )
    }
}

export default Contact;