const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
app.use(express.json());

app.use(cors());

app.post('/post', (req, res) =>{
    const data = req.body;
    console.log(data);
    const transporter = nodemailer.createTransport({
        host: 'localhost',
        service: 'gmail',
        port: 465,
        secure: true,
        logger: true,
        debug: true,
        secureConnection: false,
        auth: {
            user: data.from,
            pass: data.password
        },
        tls: {
            rejectUnauthorized: true
        }
    });
    
    const mailOptions = {
        from: data.from,
        to: data.to,
        subject: data.subject,
        text: data.content
    };
    
    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            console.log('Error occureed', error);
        }
        else{
            console.log('Email sent : ', info.response);
            return res.json({message : "Message successfully sent"});
        }
    });
})

app.listen(8000, () => console.log("Server Started"));
