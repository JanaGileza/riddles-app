"use client";

import RiddleForm from "@/components/RiddleForm/riddle-form";
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

  function renderStartButton() {
    if (!isPlaying) {
      return <Button buttonText={"Start"} onClick={beginGame} />;
    }
  }

  function beginGame() {
    setIsPlaying(true);
  }

  return (
    <div className="flex flex-col items-center text-center gap-[52px]">
      {!isPlaying ? (
        <>
          <h1 className="text-heading font-heading text-secondary">
            Random Riddle App
          </h1>
          <div className="flex flex-col items-center gap-[52px]">
            <p className="text-body font-body text-body-size">
              Welcome to the Random Riddle Generator! The rules are simple -
              click &quot;Start&quot; to receive a randomized riddle. You will
              have three attempts to answer each riddle. You can hover your
              mouse over the word &quot;Hint&quot; to receive a hint if
              you&apos;re stuck. Once you answer correctly or run out of
              guesses, click &quot;Next Riddle&quot; to try a new one. Good
              luck, have fun!
            </p>
            {renderStartButton()}
          </div>
        </>
      ) : (
        <RiddleForm
          riddle={currentRiddle!}
          onLoadNextRiddleCallback={loadNextRiddle}
        />
      )}
    </div>
  );
}
