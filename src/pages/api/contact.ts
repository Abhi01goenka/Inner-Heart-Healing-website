import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { name, email, phone, message } = req.body;

        console.log("Form Data:", { name, email, phone, message });

        if (!name || !email || !phone || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Example: Sending email using nodemailer
        const nodemailer = require("nodemailer");

        try {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                service: "gmail",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
                logger: true, // Log all events
                debug: true, // Include debug information in logs
            });

            await transporter.sendMail({
                from: "theinnerhearthealing@gmail.com",
                cc: `${email}`,
                to: "theinnerhearthealing@gmail.com",
                subject: `New Contact Request from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
            });

            res.status(200).json({ success: "Message sent successfully!" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: "Failed to send your message. Please try again." });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
