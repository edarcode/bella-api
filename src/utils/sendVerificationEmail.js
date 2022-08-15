import { transporter } from "../config/nodemailer.js";
import { BELLA_API_BASE_URL } from "../env/urls.js";

export const sendVerificationEmail = async (email, token) => {
	const res = await transporter.sendMail({
		from: `Bella ${process.env.EMAIL_NODEMAILER}`,
		to: email,
		subject: "✔ Verify email ✔",
		text: `${BELLA_API_BASE_URL}/auth/register/verify?token=${token}`
	});

	return res;
};
