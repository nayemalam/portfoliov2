const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env;
exports.handler = async event => {
  const payload = JSON.parse(event.body);
  const { email, message } = payload;

  sgMail.setApiKey(SENDGRID_API_KEY);

  const msg = {
    to: SENDGRID_TO_EMAIL,
    from: email,
    subject: `New message from yourdomain.com`,
    text: message,
  };

  try {
    await sgMail.send(msg);

    return {
      statusCode: 202,
      body: 'Message sent',
    };
  } catch (error) {
    const statusCode = typeof error.code === 'number' ? error.code : 500;

    return {
      statusCode,
      body: error.message,
    };
  }
};
