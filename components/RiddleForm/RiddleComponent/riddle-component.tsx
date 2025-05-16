"use client";

import RiddleForm from "@/components/RiddleForm/riddle";
import { getRandomRiddle, Riddle } from "@/lib/riddles";
import riddlesData from "@/data/riddles.json";
import React, { useEffect, useState } from "react";
import Button from "@/components/Button/button";

const riddlesDatabase: Riddle[] = riddlesData;

export default function RiddleComponent() {
  const [currentRiddle, setCurrentRiddle] = useState<Riddle>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Run on first mount
  useEffect(() => {
    if (currentRiddle === undefined) {
      setCurrentRiddle(getRandomRiddle(undefined, riddlesDatabase));
    }
  }, [currentRiddle]);

  function loadNextRiddle() {
    setCurrentRiddle(getRandomRiddle(currentRiddle, riddlesDatabase));
  }

  function requestGameStart() {
    if (!isPlaying) {
      return <Button buttonText={"Start"} onClick={beginGame} />;
    }
  }

  function beginGame() {
    setIsPlaying(true);
  }

  return (
    <div>
      {!isPlaying ? (
        <>
          <h1 className="text-[24px] md:text-[36px] lg:text-[48px]">
            Random Riddle Generator
          </h1>
          {requestGameStart()}
        </>
      ) : (
        <RiddleForm
          riddle={currentRiddle}
          onLoadNextRiddleCallback={loadNextRiddle}
        />
      )}
    </div>
  );
}
