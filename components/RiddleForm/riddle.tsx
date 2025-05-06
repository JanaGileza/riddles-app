import { getRandomRiddle } from "@/lib/riddles";
import type { Riddle } from "@/lib/riddles";
import riddlesData from "@/data/riddles.json";
import RiddlePrompt from "./RiddlePrompt/riddle-prompt";

const riddlesDatabase: Riddle[] = riddlesData;

function RiddleForm() {
  const randomRiddle = getRandomRiddle(undefined, riddlesDatabase);
  return (
    <div>
      <h2>RiddleForm</h2>
      <RiddlePrompt riddle={randomRiddle} />
    </div>
  );
}

export default RiddleForm;
