import RiddleForm from "@/components/RiddleForm/riddle";
import { getRandomRiddle, Riddle } from "@/lib/riddles";
import riddlesData from "@/data/riddles.json";
import React from "react";
//import { useState } from "react";

const riddlesDatabase: Riddle[] = riddlesData;

export default function Home({ randomRiddle }: { randomRiddle: Riddle }) {
  randomRiddle = getRandomRiddle(undefined, riddlesDatabase);

  return (
    <div>
      <RiddleForm riddle={randomRiddle} />
    </div>
  );
}
