"use server";

import { sanitizeUserInput } from "@/lib/userInput";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

export type FeedbackData = {
  name: string;
  email: string;
  body: string;
};

dotenv.config({ path: "./.env.credentials" });

const recipient = process.env.FEEDBACK_RECIPIENT;
const user = process.env.GMAIL_USER;
const clientId = process.env.GMAIL_CLIENT_ID;
const clientSecret = process.env.GMAIL_CLIENT_SECRET;
const refreshToken = process.env.GMAIL_REFRESH_TOKEN;

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAUTH2",
    user: user,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
  },
});

// Wrap in an async IIFE so we can use await.
const sendFeedbackEmail = async ({ name, email, body }: FeedbackData) => {
  const info = await transporter.sendMail({
    from: `${email}`,
    to: recipient,
    subject: `New Feedback Received from ${name}`,
    text: `${body}`, // plain‑text body
  });

  console.log("Message sent:", info.messageId);
};

function getResponse({ name, email, body }: FeedbackData) {
  const sanitizedInput = sanitizeUserInput({ name, email, body });
  sendFeedbackEmail(sanitizedInput);
}

export default getResponse;
