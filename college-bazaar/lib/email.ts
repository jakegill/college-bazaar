import nodemailer from "nodemailer";

export async function sendEmail({
	to,
	subject,
	body,
}: {
	to: string;
	subject: string;
	body: string;
}) {
    const {SMPT_EMAIL, SMPT_PASSWORD} = process.env;

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMPT_EMAIL,
            pass: SMPT_PASSWORD
        }
    });

    try {
        const res = await transport.verify();
        console.log("Email exists: ", res);
    } catch (error) {
        console.log("Error verifying email: ", error);
    }
    try {
        const sendEmailResult = await transport.sendMail({
            from: SMPT_EMAIL,
            to,
            subject,
            html: body
        });
        console.log("Confirmation email sent. ", res);
    }

}
