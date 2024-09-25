import nodemailer from "nodemailer"

const sendEmail = async (req, res, next) => {
    const { email, subject, text } = req.emailDetails;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: error.message });
        }
        next(); 
    });
};
export default sendEmail;
