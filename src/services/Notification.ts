import nodeMailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

const sendMail = (token : string, emailAddress : string) => {
  try {
    const transporter = nodeMailer.createTransport(
      smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'tradio.verify@gmail.com',
          pass: 'Tradioverify1234@',
        },
      })
    );
    const link = `https://adoring-jepsen-5ed0f3.netlify.app/completeregistration/${token}`;
    const output = `
    <h2>Tradio</h2>
    <p>Click on the Link below to comfrim your Account</p>
    <button><a href = ${link}>Click on the Link below to comfrim your Account</a></button> 

  `;

    const mailOptions = {
      from: 'derryukere@gmail.com',
      to: emailAddress,
      subject: 'Please Comfirm your Tradio Account',
      html: output,
    };

    // send mail
    transporter.sendMail(mailOptions, (Error, info) => {
      if (Error) {
        console.log(Error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  } catch (error) {
    console.log('error occured in sendMail func: ', error);
  }
};

const sendPasswordRecoverMail = (token : string, emailAddress : string) => {
  try {
    const transporter = nodeMailer.createTransport(
      smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'tradio.verify@gmail.com',
          pass: 'Tradioverify1234@',
        },
      })
    );
    const link = `https://adoring-jepsen-5ed0f3.netlify.app/resetPasswrod/${token}`;
    const output = `
    <h2>Tradio</h2>
    <p>Click on the Link below to reset your Password</p>
    <button><a href = ${link}>Click on the Link below to comfrim your Account</a></button> 

  `;

    const mailOptions = {
      from: 'derryukere@gmail.com',
      to: emailAddress,
      subject: 'Password Reset',
      html: output,
    };

    // send mail
    transporter.sendMail(mailOptions, (Error, info) => {
      if (Error) {
        console.log(Error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  } catch (error) {
    console.log('error occured in sendMail func: ', error);
  }
};
export { sendMail, sendPasswordRecoverMail };
