import React, { Component } from 'react';
import MetaTags from '../components/metatags/MetaTags';
import Form from '../components/contact/Form';
import HeaderDesc from '../components/headerdesc/HeaderDesc';
import Socials from '../components/socials/Socials';
import { PopupButton } from 'react-calendly';

class Contact extends Component {
  render() {
    const headerText = "Let's Connect";
    const descText =
      "One of the things I enjoy doing the most is genuinely meeting new people. If you'd like to grab coffee for a casual talk or looking to work together on an opportunity, don't hesitate to reach out!";

    return (
      <div className="contact container">
        <MetaTags title="Let's Talk | Nayem Alam" />

        <HeaderDesc header={headerText} desc={descText} />
        <Form />
        <PopupButton
          url="https://calendly.com/nayemalam"
          text="Book 1on1 With Me ☕"
          className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall"
          styles={{
            bottom: '60px',
            position: 'absolute',
            left: 0,
            right: 0,
            margin: 'auto',
          }}
        />
        <Socials />
      </div>
    );
  }
}

export default Contact;
