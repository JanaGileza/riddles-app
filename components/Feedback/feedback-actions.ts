"use server";

import { sanitizeUserInput } from "@/lib/userInput";
import nodemailer from "nodemailer";

export type FeedbackData = {
  name: string;
  email: string;
  body: string;
};

const fr = process.env.F_R;
const u = process.env.U;
const cid = process.env.C_ID;
const cs = process.env.C_S;
const rt = process.env.R_T;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAUTH2",
    user: u,
    clientId: cid,
    clientSecret: cs,
    refreshToken: rt,
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
