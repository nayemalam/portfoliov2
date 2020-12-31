import React, { Component } from 'react';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TelegramIcon from '@material-ui/icons/Telegram';
import MenuItem from '@material-ui/core/MenuItem';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      sent: false,
      validateSent: '',
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSubjectChange = this.onSubjectChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  onEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onMessageChange(event) {
    this.setState({
      message: event.target.value,
    });
  }

  onSubjectChange(event) {
    this.setState({
      subject: event.target.value,
    });
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      validateSent:
        'Message sent ✔. Thank you for messaging, I will get back to you as soon as possible.',
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      validateSent: '...sending',
    });

    let dataToCollect = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    // try {
    //     const res = await fetch('/.netlify/functions/sendmail', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         email,
    //         message,
    //       }),
    //     });

    //     if (!res.ok) {
    //         this.setState({
    //             sent: false,
    //         })
    //     } else {
    //         this.setState({
    //             sent: true,
    //         })
    //     }
    //   } catch (e) {
    //     this.setState({
    //         sent: false,
    //     })

    // };

    Axios.post('/.netlify/functions/index', dataToCollect)
      .then(response => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm(),
        );
        console.log('Success!', response.status, response.statusText);
      })
      .catch(error => {
        this.setState({
          validateSent:
            'Oops an error occurred. Please contact me directly at: nayem.alam@mail.mcgill.ca',
        });
        console.log('Message not sent.', error);
      });
  }

  render() {
    const subjectOptions = [
      {
        value: 'Hire me to speak',
      },
      {
        value: 'Need a website',
      },
      {
        value: "Let's work on a project together",
      },
      {
        value: 'Down to grab coffee?',
      },
      {
        value: 'Volunteering opportunity',
      },
      {
        value: 'Other, see message below',
      },
    ];

    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div style={{ display: 'flex' }}>
            <TextField
              // style={{display: 'block',width: '50%'}}
              label="Name"
              placeholder="Your Name"
              helperText="Required"
              fullWidth
              required
              style={{ margin: '0 auto', marginRight: '40px' }}
              value={this.state.name}
              onChange={this.onNameChange}
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
              style={{ margin: '0 auto' }}
              value={this.state.email}
              onChange={this.onEmailChange}
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
                {option.value}
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
            value={this.state.message}
            onChange={this.onMessageChange}
          />
          <Button
            type="submit"
            style={{ marginTop: '15px' }}
            variant="contained"
            color="primary"
            endIcon={<TelegramIcon />}
          >
            Send
          </Button>
        </form>
        <p>{this.state.validateSent}</p>
      </div>
    );
  }
}

export default Form;
