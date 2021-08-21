import nodeMailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import {generateHtml} from './templates/htmlTemplate';








const transporter = nodeMailer.createTransport(
  smtpTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'info@tradiobtc.com', // generated ethereal user
      pass: 'Derryukere1256', // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
);




export const sendMail = (token : string, emailAddress : string) => {
  try {
    
    const link = `https://portal.tradiobtc.com/completeregistration/${token}`;
    const title = 'Verify Your E-mail Address';
    const paragrapgh = 'You\'re almost ready to get started. Please click on the button below to to verify your Email Address and enjoy exclusive cleaning services with us!';
    const btnText = 'Verify Your Email';
    const htmlToSend = generateHtml(title,paragrapgh , btnText, link);


    const mailOptions = {
      from: '"Tradio Support" <info@tradiobtc.com>',
      to: emailAddress,
      bcc:'info@tradiobtc.com',
      subject: 'Please Comfirm your Tradio Account',
      html : htmlToSend,
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

export const sendPasswordRecoverMail = (token : string, emailAddress : string) => {
  try { 
    const link = `https://portal.tradiobtc.com/resetPasswrod/${token}`;
    const title = 'Password Reset';
    const paragrapgh = 'You\'re almost ready to get started. Please click on the button below to to reset your password and enjoy exclusive cleaning services with us!';
    const btnText = 'Reset Password';
    const htmlToSend = generateHtml(title,paragrapgh , btnText, link);
   
    const mailOptions = {
      from: '"Tradio Support" <info@tradiobtc.com>',
      to: emailAddress,
      bcc:'info@tradiobtc.com',
      subject: 'Password Reset',
      html : htmlToSend,
    };
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

export const sendDepositUpdateMail = (amount : number | string, emailAddress : string) => {
  try { 
    const link = 'https://portal.tradiobtc.com/';
    const title = 'Deposit Update';
    const paragrapgh = `Your account has successfully been Deposited with $ ${amount}, automated trading will commence in next available opportunity `;
    const btnText = 'Login Your Account';
    const htmlToSend = generateHtml(title,paragrapgh , btnText, link);
   
    const mailOptions = {
      from: '"Tradio Support" <info@tradiobtc.com>',
      to: emailAddress,
      bcc:'info@tradiobtc.com',
      subject: 'Deposit Update',
      html : htmlToSend,
    };
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

export const sendProfitUpdateMail = (amount : number | string, emailAddress : string) => {
  try { 
    const link = 'https://portal.tradiobtc.com/';
    const title = 'You have Profits';
    const paragrapgh = `Your account has successfully been Deposited with $ ${amount} profit, automated Trading will continue in the next available opportunity.`;
    const btnText = 'Login Your Account';
    const htmlToSend = generateHtml(title,paragrapgh , btnText, link);
   
    const mailOptions = {
      from: '"Tradio Support" <info@tradiobtc.com>',
      to: emailAddress,
      bcc:'info@tradiobtc.com',
      subject: 'Profit Update',
      html : htmlToSend,
    };
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


export const sendCasualMail = (email :  string, emailAddress : string) => {
  console.log(email,emailAddress);

  try { 
    const link = 'https://portal.tradiobtc.com/';
    const title = 'Message From Admin';
    const paragrapgh = email;
    const btnText = 'Login Your Account';
    const htmlToSend = generateHtml(title,paragrapgh , btnText, link);
   
    const mailOptions = {
      from: '"Tradio Support" <info@tradiobtc.com>',
      to: emailAddress,
      bcc:'info@tradiobtc.com',
      subject: 'Profit Update',
      html : htmlToSend,
    }; 
    transporter.sendMail(mailOptions, (Error, info) => {
      console.log('mail options',mailOptions);
      if (Error) {
        console.log(Error);
      } else {
        console.log('Email sent: ' + info.response);
        return {
          message : 'Email sent'
        };
      } 
    });
  
  } catch (error) {
    console.log('error occured in sendMail func: ', error);
  }
};
