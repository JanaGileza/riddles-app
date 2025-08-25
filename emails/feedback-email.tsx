import * as React from "react";
import { Html, Button, Text } from "@react-email/components";
import { FormData } from "@/components/Feedback/feedback";

type FeedbackEmailProps = FormData & {
  url: string;
};

function FeedbackEmail({ name, email, body, url }: FeedbackEmailProps) {
  return (
    <Html lang="en">
      <Text>You have received feedback from {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Message: {body}</Text>
      <Button href={url}>Feedback</Button>
    </Html>
  );
}

export default FeedbackEmail;
