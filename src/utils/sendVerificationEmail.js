import { transporter } from "../config/nodemailer.js";

export const sendVerificationEmail = async (email, token) => {
	await transporter.sendMail({
		from: `Bella ${process.env.EMAIL_NODEMAILER}`,
		to: email,
		subject: "✔ Verify email ✔",
		text: `${process.env.BELLA_API_BASE_URL}/auth/register/verify?token=${token}`
	});
};
