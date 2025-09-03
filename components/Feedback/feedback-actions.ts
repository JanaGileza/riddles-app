"use server";

import { sanitizeUserInput } from "@/lib/userInput";
import nodemailer from "nodemailer";

export type FeedbackData = {
  name: string;
  email: string;
  body: string;
};

const fr = process.env.FEEDBACK_RECIPIENT;
const u = process.env.USER;
const ap = process.env.A;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: u,
    pass: ap,
  },
});

const sendFeedbackEmail = async ({ name, email, body }: FeedbackData) => {
  const info = await transporter.sendMail({
    from: `${email}`,
    to: fr,
    subject: `New Feedback Received from ${name}`,
    text: `Contact back at ${email}: ${body}`,
  });

  console.log("Message sent:", info.messageId);
};

function getResponse({ name, email, body }: FeedbackData) {
  const sanitizedInput = sanitizeUserInput({ name, email, body });
  sendFeedbackEmail(sanitizedInput);
}

export default getResponse;
