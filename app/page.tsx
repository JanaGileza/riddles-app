import React from "react";
import RiddleComponent from "../components/RiddleForm/RiddleComponent/riddle-component";
import Image from "next/image";
import gitHubIcon from "../public/github-mark.svg";
import Link from "next/link";
import FeedbackForm from "@/components/Feedback/feedback";

export default function Home() {
  return (
    <div className="flex flex-grow min-h-full min-w-full flex-col items-center gap-[52px] bg-primary px-[24px] py-[52px] md:px-[10%]">
      <RiddleComponent />
      <footer className="flex flex-grow min-w-full flex-row items-center gap-[35%] px-[24px] py-[25%] md:px-[10%]">
        <Link
          href="https://github.com/JanaGileza/riddles-app"
          className="w-fit h-fit shrink-0"
        >
          <Image
            src={gitHubIcon}
            alt="Check out my GitHub"
            width={40}
            height={40}
          />
        </Link>
        <FeedbackForm />
      </footer>
    </div>
  );
}
