"use client";

import RiddleForm from "@/components/RiddleForm/riddle";
import { getRandomRiddle, Riddle } from "@/lib/riddles";
import riddlesData from "@/data/riddles.json";
import React, { useEffect, useState } from "react";

const riddlesDatabase: Riddle[] = riddlesData;

export default function RiddleComponent() {
  const [currentRiddle, setCurrentRiddle] = useState<Riddle>();

  // Run on first mount
  useEffect(() => {
    if (currentRiddle === undefined) {
      setCurrentRiddle(getRandomRiddle(undefined, riddlesDatabase));
    }
  }, [currentRiddle]);

  function loadNextRiddle() {
    setCurrentRiddle(getRandomRiddle(currentRiddle, riddlesDatabase));
  }

  return (
    <RiddleForm
      riddle={currentRiddle}
      onLoadNextRiddleCallback={loadNextRiddle}
    />
  );
}
