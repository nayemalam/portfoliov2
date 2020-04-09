import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TelegramIcon from '@material-ui/icons/Telegram';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            sent: false,
            buttonText: 'Send Message'
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    onNameChange(event) {
        this.setState({
            name: event.target.value
        })
    };
    
    onEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    };
    
    onMessageChange(event) {
        this.setState({
            message: event.target.value
        })
    };

    onSubjectChange(event) {
        this.setState({
            subject: event.target.value
        })
    }

    resetForm(){
        this.setState({
            name: '', 
            email: '',
            subject: '',
            message: '',
            buttonText: 'Message Sent'
        })
    };
      
    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }

        axios.post('API_URI', data)
        .then( res => {
            this.setState({
                sent: true
            }, this.resetForm())
        })
        .catch( () => {
            console.log('Message not sent.')
        })
    }
    

    render () {

        const subjectOptions = [
            {
                value: 1,
                label: "Hire me to speak"
            },
            {
                value: 2,
                label: "Need a website"
            },
            {
                value: 3,
                label: "Let's work on a project together"
            },
            {
                value: 4,
                label: "Down to grab coffee?"
            },
            {
                value: 5,
                label: "Other, see message below"
            }
        ];
  
        return (
            <div className='form'> 
                <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div style={{display: 'flex'}}>
                        <TextField
                            // style={{display: 'block',width: '50%'}}
                            label="Name"
                            placeholder="Your Name"
                            helperText="Required"
                            fullWidth
                            required
                            style={{margin: '0 auto', marginRight: '40px'}}
                            value={this.state.name} onChange={this.onNameChange}
                        />
                        <TextField
                            // style={{display: 'block', width: '50%'}}
                            type="email"
                            label="Email"
                            placeholder="Email Address"
                            helperText="Required"
                            margin="normal"
                            fullWidth
                            required
                            style={{margin: '0 auto'}}
                            value={this.state.email} onChange={this.onEmailChange}
                        />
                    </div>
                    <TextField
                        select
                        label="Subject"
                        value={this.state.subject}
                        onChange={this.onSubjectChange}
                        fullWidth
                        helperText="Please select an option"
                    >
                        {subjectOptions.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                       
                    </TextField>
                    <TextField
                        label="Message"
                        placeholder="Your message"
                        margin="normal"
                        multiline
                        rows="5"
                        variant="outlined"
                        fullWidth
                        required
                        value={this.state.message} onChange={this.onMessageChange}
                    />
                    <Button
                        type='submit'
                        style={{marginTop: '15px'}}
                        variant="contained"
                        color="primary"
                        endIcon={<TelegramIcon />}
                    >
                        {this.state.buttonText}
                    </Button>
                </form>

            </div>
        )
    }
}

export default Form;