import React, { Component } from 'react';
import Form from './form/Form';

class Contact extends Component {

    render () {
        return (
            <div className='contact container'>
                <h2 className='titleWithBackground'>Let's Connect</h2>
                <Form></Form>
                {/* <div className='bottomRight' style={{marginTop: '50px'}}>
                    <h4>You can also reach me at:</h4>
                    <div>
                        <div>
                            <h4>Instagram</h4>
                            <p className='paragraphColor'>Some text</p>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Contact;
