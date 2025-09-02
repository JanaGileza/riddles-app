import { FeedbackData } from "@/components/Feedback/feedback-actions";

function sanitizeUserInput({ name, email, body }: FeedbackData): FeedbackData {
  // ensure that user input is sanitized before being sent to app email
  const sanitizedName = encodeURIComponent(name);
  const sanitizedEmail = encodeURIComponent(email);
  const sanitizedBody = encodeURIComponent(body);

  return { name: sanitizedName, email: sanitizedEmail, body: sanitizedBody };
}

function areInputsValid({ name, email, body }: FeedbackData): boolean {
  const isValid = name !== "" && email !== "" && body !== "";
  // additional validation if desired!!
  return isValid;
}

export { areInputsValid, sanitizeUserInput };
