// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const sendEmail = async (options) => {
//   const msg = {
//     to: options.email,
//     from: process.env.SENDGRID_MAIL,
//     templateId: options.templateId,
//     dynamic_template_data: options.data,
//   };

//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log('Email Sent');
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// module.exports = sendEmail;

const mailgun = require('mailgun-js');
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

const sendEmail = async (options) => {
  const data = {
    to: options.email,
    from: process.env.MAILGUN_DOMAIN, // Replace with the appropriate email address and domain
    templateId: options.templateId,
    dynamic_template_data: options.data,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email Sent:', body);
    }
  });
};

module.exports = sendEmail;
