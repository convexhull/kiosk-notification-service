const sgMail = require('../../../lib/sendgrid');



const sendMail = async (payload) => {
    
    const msg = {
      to: payload.body.to,
      from: 'singhyashpratap06@gmail.com',
      subject: payload.body.subject,
      text: payload.body.text,
    };

    try{
        let mailResponse = await sgMail.send(msg);
        return mailResponse;
    } catch(e){
        console.log(e);
        throw e;
    }
}


module.exports = {
    sendMail
}