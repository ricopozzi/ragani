import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({ 
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'mmnauticawebsite@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
    
})

export default function ( req:NextApiRequest, res:NextApiResponse) {

     const mailData = {
        from: `mmnauticawebsite@gmail.com`,
        to: 'mmnauticailhabela@gmail.com',
        subject: `Mensagem de ${req.body.name}`,
        text: `${req.body.name}, ${req.body.email}, ${req.body.phone} `,
        
       }

       transporter.sendMail(mailData, (err, info) => {
           if(err){
               console.log(err)
           }else {
               console.log(info)
           }
       })

       return res.json({message: res.status})
}