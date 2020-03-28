import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TelegramIcon from '@material-ui/icons/Telegram';
import MenuItem from '@material-ui/core/MenuItem';

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            message: '',
            selected: ''
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
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

    onSelectChange(event) {
        this.setState({
            selected: event.target.value
        })
    }

    resetForm(){
        this.setState({
            name: '', 
            email: '',
            message: ''
        })
    };
      
    handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:3002/send', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                alert('Message Sent.');
                this.resetForm()
            } else if (response.status === 'fail') {
                alert('Message failed to send.')
            }
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
                        value={this.state.selected}
                        onChange={this.onSelectChange}
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
                    Send
                </Button>
               
                    {/* <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange} />
                    </div> */}
                    {/* <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange} />
                    </div> */}
                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                </form>

            </div>
        )
    }
}

export default Form;