import React from "react";
import RiddleComponent from "../components/RiddleForm/RiddleComponent/riddle-component";

export default function Home() {
  return (
    <div className="flex flex-grow min-h-full min-w-full flex-col items-center gap-[52px] bg-white px-[24px] py-[52px] md:px-[10%]">
      <RiddleComponent />
      <footer className="mt-auto items-baseline">
        <a href="https://github.com/JanaGileza/riddles-app/tree/main">
          Check out more about this project on my GitHub
        </a>
      </footer>
    </div>
  );
}
