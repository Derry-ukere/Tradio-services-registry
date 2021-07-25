import nodeMailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';


const sendMail = (token : string, emailAddress : string) => {
  try {
    const transporter = nodeMailer.createTransport(
      smtpTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure:false,
        auth: {
          user: 'Tradiobtc@outlook.com',
          pass: 'Mudiagaukere1256',
          
        },
        tls: {
          ciphers:'SSLv3'
        },
        logger: true,
        debug: true
      })
    );
    const link = `https://adoring-jepsen-5ed0f3.netlify.app/completeregistration/${token}`;
    const output = `
    <h2>Tradio</h2>
    <p>Click on the Link below to comfrim your Account</p>
    <button><a href = ${link}>Click on the Link below to comfrim your Account</a></button> 

  `;

    const mailOptions = {
      from: 'Tradiobtc@outlook.com',
      to: emailAddress,
      bcc:'Tradiobtc@outlook.com',
      subject: 'Please Comfirm your Tradio Account',
      html: output,
      text: 'Your are gettin this message because you registered ana account with Tradio inc.',
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
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure:false,
        auth: {
          user: 'Tradiobtc@outlook.com',
          pass: 'Mudiagaukere1256',
        },
        tls: {
          ciphers:'SSLv3'
        },
        logger: true,
        debug: true
      })
    );
    const link = `https://adoring-jepsen-5ed0f3.netlify.app/resetPasswrod/${token}`;
    const output = `
    <h2>Tradio</h2>
    <p>Click on the Link below to reset your Password test change</p>
    <button><a href = ${link}>Click on the Link below to comfrim your Account</a></button> 

  `;

    const mailOptions = {
      from: 'Tradiobtc@outlook.com',
      to: emailAddress,
      bcc:'Tradiobtc@outlook.com',
      subject: 'Password Reset',
      html: output,
      text: 'Your are gettin this message because you registered ana account with Tradio inc.',

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
