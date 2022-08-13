import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: process.env.EMAIL_NODEMAILER, // generated ethereal user
		pass: process.env.PASS_NODEMAILER // generated ethereal password
	}
});
