"use server";

import { sanitizeUserInput } from "@/lib/userInput";

export type FeedbackData = {
  name: string;
  email: string;
  body: string;
};

function getResponse({ name, email, body }: FeedbackData) {
  const sanitizedInput = sanitizeUserInput({ name, email, body });
  console.log(sanitizedInput);
}

export default getResponse;
