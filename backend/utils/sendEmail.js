const nodemailer = require("nodemailer");

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  //Create email transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorisec: false,
    },
  });

  //Option for sending email
  const options = {
    from: sent_from,
    to: send_to,
    repplyTo: reply_to,
    subject: subject,
    html: message,
  };

  //Send email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    }
    console.log(info);
  });
};

module.exports = sendEmail;
