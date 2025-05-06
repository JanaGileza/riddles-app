import { Riddle } from "@/lib/riddles";

type RiddlePromptProps = {
  riddle: Riddle;
};

function RiddlePrompt({ riddle }: RiddlePromptProps) {
  return <p>{riddle.riddle}</p>;
}

export default RiddlePrompt;
