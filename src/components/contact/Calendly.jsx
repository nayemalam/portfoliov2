import React from 'react';
import { PopupButton } from 'react-calendly';

const Calendly = () => (
  <div className="calendly">
    Prefer having a conversation in person? Open{' '}
    <PopupButton
      url="https://calendly.com/nayemalam"
      text="this"
      styles={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontFamily: 'Quicksand',
        textDecoration: 'underline',
      }}
    />{' '}
    to schedule a virtual chat ☕ with me.
  </div>
);

export default Calendly;
