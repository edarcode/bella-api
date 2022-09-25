import { transporter } from "../config/nodemailer.js";
import { EMAIL_NODEMAILER } from "../env/nodemailer.js";
import { BELLA_API_BASE_URL } from "../env/urls.js";

export const sendVerificationEmail = async (email, token) => {
	const res = await transporter.sendMail({
		from: `Bella ${EMAIL_NODEMAILER}`,
		to: email,
		subject: "✔ Verify email ✔",
		text: `${BELLA_API_BASE_URL}/auth/verify-register?token=${token}`
	});

	return res;
};
