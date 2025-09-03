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
  service: "gmail",
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
  try {
    const info = await transporter.sendMail({
      from: `${email}`,
      to: fr,
      subject: `New Feedback Received from ${name}`,
      text: `Contact back at ${email}: ${body}`,
    });
    console.log("Message sent:", info);
  } catch (err) {
    console.error("Nodemailer error:", err);
  }
};

function getResponse({ name, email, body }: FeedbackData) {
  const sanitizedInput = sanitizeUserInput({ name, email, body });
  sendFeedbackEmail(sanitizedInput);
}

export default getResponse;
