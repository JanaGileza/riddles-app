import { Riddle } from "@/lib/riddles";

type RiddlePromptProps = {
  riddle: Riddle | undefined;
};

function RiddlePrompt({ riddle }: RiddlePromptProps) {
  if (riddle === undefined) {
    return <p></p>;
  }

  return <p>{riddle.riddle}</p>;
}

export default RiddlePrompt;
