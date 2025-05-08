import RiddleForm from "@/components/RiddleForm/riddle";
import { getRandomRiddle, Riddle } from "@/lib/riddles";
import riddlesData from "@/data/riddles.json";
import React from "react";

const riddlesDatabase: Riddle[] = riddlesData;

export default function RiddleComponent() {
  const randomRiddle = getRandomRiddle(undefined, riddlesDatabase);

  return <RiddleForm riddle={randomRiddle} />;
}
