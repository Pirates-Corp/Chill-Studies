const nodemailer = require("nodemailer");

const sendEmail = async option => {
  console.log(option);
  //1) create a transfer
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
    //Active in gmail
  });

  //2) Define the email option
  const mailOption = {
    from: "Siva prakash  <admin@chillstudies.com>",
    to: option.studentId,
    subject: option.subject,
    text: option.message
  };

  //3)Actually send the email

  await transporter.sendMail(mailOption);
};

module.exports = sendEmail;
