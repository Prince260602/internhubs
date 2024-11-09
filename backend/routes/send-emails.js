// // const emailRouter = require("express").Router()
// // const nodemailer = require("nodemailer");
// // const {use} = require("bcrypt/promises");
// // require('dotenv').config()

// // const transporter = nodemailer.createTransport({
// //     service: "Gmail",
// //     host: "smtp.gmail.com",
// //     port: 465,
// //     secure: true,
// //     secureConnection : false,
// //     auth: {
// //         user: process.env.MAIL_USER,
// //         pass: process.env.MAIL_PASS,
// //     },
// //     tls : {
// //         rejectUnauthorized :true
// //     }
// // });

// // emailRouter.post("/contactus",(req, res)=> {
// //     const data = req.body;
// //     const firstName = data.firstname;
// //     const lastname = data.lastname;
// //     const company = data.company;
// //     const email = data.email;
// //     const course = data.course;
// //     const message = data.message;

// //     const mailOptions = {
// //         from: email,
// //         to: process.env.MAIL_USER,
// //         subject: `Contact form Submission from ${firstName} ${lastname}`,
// //         text: `Name : ${firstName} ${lastname}
// //                Email : ${email}
// //                Company : ${company}
// //                Course : ${course}
// //                Message: ${message}`,
// //     };
// //     transporter.sendMail(mailOptions, (error, info) => {
// //         if (error) {
// //             res.status(500).send({ message : error})
// //         } else {
// //             res.status(200).send({emailSent : info.response})
// //         }
// //     });
// // })

// // emailRouter.post("/interview", (req, res) => {
// //     const data = req.body;
// //     const { companyName, date, time, companyEmail, link, firstName, lastName,userEmail } = data;

// //     const mailOptions = {
// //         from: process.env.MAIL_USER,
// //         to: userEmail,
// //         subject: `Interview Invitation from ${companyName}`,
// //         text: `Dear ${firstName} ${lastName},

// // Congratulations on being shortlisted for the internship position at ${companyName}. We were impressed by your application and would like to invite you for an interview to discuss your qualifications and experience further.

// // Here are the details of your interview:
// // Date: ${date}
// // Time: ${time}
// // Link: ${link}

// // We look forward to speaking with you and getting to know more about how you can contribute to our team.

// // Best regards,
// // ${companyName}`
// //     };

// //     transporter.sendMail(mailOptions, (error, info) => {
// //         if (error) {
// //             res.status(500).send({ message: error });
// //         } else {
// //             res.status(200).send({ emailSent: info.response });
// //         }
// //     });
// // });

// // emailRouter.post("/not-interested", (req, res) => {
// //     const data = req.body;
// //     const { companyName,roleName, firstName, lastName, userEmail } = data;

// //     const mailOptions = {
// //         from: process.env.MAIL_USER,
// //         to: userEmail,
// //         subject: `Application Status from ${companyName}`,
// //         text: `Dear ${firstName} ${lastName},

// // Thank you for applying for the ${roleName} position at ${companyName}. We appreciate the time and effort you put into your application and interview.

// // After careful consideration, we regret to inform you that we have decided to move forward with other candidates. Please do not be discouraged as your skills and experiences are impressive, and we encourage you to apply for future opportunities with us.

// // We wish you all the best in your job search and future endeavors.

// // Best regards,
// // ${companyName}`
// //     };

// //     transporter.sendMail(mailOptions, (error, info) => {
// //         if (error) {
// //             res.status(500).send({ message: error });
// //         } else {
// //             res.status(200).send({ emailSent: info.response });
// //         }
// //     });
// // });

// // emailRouter.post("/hired", (req, res) => {
// //     const data = req.body;
// //     const { companyName, roleName, firstName, lastName, userEmail } = data;

// //     const mailOptions = {
// //         from: process.env.MAIL_USER,
// //         to: userEmail,
// //         subject: `Job Offer from ${companyName}`,
// //         text: `Dear ${firstName} ${lastName},

// // We are excited to offer you the ${roleName} position at ${companyName}. After reviewing your qualifications and interview, we are confident that you will be a valuable addition to our team.

// // We are looking forward to welcoming you on board and working with you. Please find the details of your job offer attached to this email.

// // Congratulations and welcome to ${companyName}!

// // Best regards,
// // ${companyName}`
// //     };

// //     transporter.sendMail(mailOptions, (error, info) => {
// //         if (error) {
// //             res.status(500).send({ message: error });
// //         } else {
// //             res.status(200).send({ emailSent: info.response });
// //         }
// //     });
// // });


// // emailRouter.post("/subscribe" ,(req, res) => {
// //     const { userEmail } = req.body;


// //     const mailOptions = {
// //         from: userEmail,
// //         to: process.env.MAIL_USER,
// //         subject: `Subscription for ${userEmail}`,
// //         text: `${userEmail} has subscribed for newsletter`,
// //     };
// //     transporter.sendMail(mailOptions, (error, info) => {
// //         if (error) {
// //             res.status(500).send({ message : error})
// //         } else {
// //             res.status(200).send({emailSent : info.response})
// //         }
// //     });
// // })

// // module.exports = emailRouter;




















  
// const emailRouter = require("express").Router();
// const nodemailer = require("nodemailer");
// require('dotenv').config();

// const transporter = nodemailer.createTransport({
//     service: "gmail", // Gmail service instead of "Gmail" and specifying smtp separately
//     auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//     },
//     tls: {
//         rejectUnauthorized: false, // Avoids rejecting unauthorized emails (TLS check)
//     }
// });

// // Contact Us Route
// emailRouter.post("/contactus", (req, res) => {
//     const data = req.body;
//     const { firstname, lastname, company, email, course, message, phone } = data;

//     const mailOptions = {
//         from: email,
//         to: process.env.MAIL_USER,
//         subject: `Contact form Submission from ${firstname} ${lastname}`,
//         text: `Name: ${firstname} ${lastname}
//                Email: ${email}
//                Phone: ${phone}  // Added phone number
//                Company: ${company}
//                Course: ${course}
//                Message: ${message}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             res.status(500).send({ message: error });
//         } else {
//             res.status(200).send({ emailSent: info.response });
//         }
//     });
// });

// // Interview Invitation Route
// emailRouter.post("/interview", (req, res) => {
//     const data = req.body;
//     const { companyName, date, time, link, firstName, lastName, userEmail, phone } = data;

//     const mailOptions = {
//         from: process.env.MAIL_USER,
//         to: userEmail,
//         subject: `Interview Invitation from ${companyName}`,
//         text: `Dear ${firstName} ${lastName},

// Congratulations on being shortlisted for the internship position at ${companyName}. We were impressed by your application and would like to invite you for an interview to discuss your qualifications and experience further.

// Here are the details of your interview:
// Date: ${date}
// Time: ${time}
// Link: ${link}

// Phone: ${phone}  // Added phone number

// We look forward to speaking with you.

// Best regards,
// ${companyName}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             res.status(500).send({ message: error });
//         } else {
//             res.status(200).send({ emailSent: info.response });
//         }
//     });
// });

// // Not Interested Route
// emailRouter.post("/not-interested", (req, res) => {
//     const data = req.body;
//     const { companyName, roleName, firstName, lastName, userEmail, phone } = data;

//     const mailOptions = {
//         from: process.env.MAIL_USER,
//         to: userEmail,
//         subject: `Application Status from ${companyName}`,
//         text: `Dear ${firstName} ${lastName},

// Thank you for applying for the ${roleName} position at ${companyName}. We regret to inform you that we have decided to move forward with other candidates.

// Phone: ${phone}  // Added phone number

// Best regards,
// ${companyName}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             res.status(500).send({ message: error });
//         } else {
//             res.status(200).send({ emailSent: info.response });
//         }
//     });
// });

// // Hired Route
// emailRouter.post("/hired", (req, res) => {
//     const data = req.body;
//     const { companyName, roleName, firstName, lastName, userEmail, phone } = data;

//     const mailOptions = {
//         from: process.env.MAIL_USER,
//         to: userEmail,
//         subject: `Job Offer from ${companyName}`,
//         text: `Dear ${firstName} ${lastName},

// We are excited to offer you the ${roleName} position at ${companyName}. 

// Phone: ${phone}  // Added phone number

// Best regards,
// ${companyName}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             res.status(500).send({ message: error });
//         } else {
//             res.status(200).send({ emailSent: info.response });
//         }
//     });
// });

// // Subscribe Route
// emailRouter.post("/subscribe", (req, res) => {
//     const { userEmail, phone } = req.body;

//     const mailOptions = {
//         from: userEmail,
//         to: process.env.MAIL_USER,
//         subject: `Subscription for ${userEmail}`,
//         text: `${userEmail} has subscribed for newsletter.
//                Phone: ${phone}  // Added phone number`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             res.status(500).send({ message: error });
//         } else {
//             res.status(200).send({ emailSent: info.response });
//         }
//     });
// });

// module.exports = emailRouter;










const emailRouter = require("express").Router();
const nodemailer = require("nodemailer");
require('dotenv').config();

// Use the app password for Gmail (if 2FA is enabled) or your regular password if not
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER, // Your Gmail address
        pass: process.env.MAIL_PASS  // Use App Password if 2FA enabled
    },
    tls: {
        rejectUnauthorized: false, // Avoids rejecting unauthorized emails (TLS check)
    }
});

emailRouter.post("/contactus", (req, res) => {
    const data = req.body;
    const { firstname, lastname, company, email, course, message, phone } = data;

    const mailOptions = {
        from: email,
        to: process.env.MAIL_USER,
        subject: `Contact form Submission from ${firstname} ${lastname}`,
        text: `Name: ${firstname} ${lastname}
               Email: ${email}
               Phone: ${phone}
               Company: ${company}
               Course: ${course}
               Message: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send({ message: error });
        } else {
            res.status(200).send({ emailSent: info.response });
        }
    });
});

module.exports = emailRouter;
