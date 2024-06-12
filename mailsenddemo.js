const nodemailer = require('nodemailer');


const gmailTransporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'ktatwadarsan@gmail.com', //gmail id
        pass: 'hehz hkwk rkkj lkgp'  // app password
    }
});


const mailOptions = {
    from: 'ktatwadarsan@gmail.com',
    to: 'gnanasaichebrolu@gmail.com',
    subject: 'MSWD PROJECT TEST MAIL',
    html: '<font color=red>Hello </font>'
};


gmailTransporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.error('Error sending email through Gmail:', error.message);
    } else {
        console.log('Email Sent Successfully');
    }
});