var nodemailer = require('nodemailer');
var trans=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'yaminisrinavyaanisetti@gmail.com',
        pass:"ibjhrjmokpdsdxly"
    }

});

var mail={
    from:'yaminisrinavyaanisetti@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject:'Task-3 sending mail',
    text:'Iam 20A21A0509'
};
trans.sendMail(mail, function(error, info){
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log('Email sent:' + info.response);
    }
});