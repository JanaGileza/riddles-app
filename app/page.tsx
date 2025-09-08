import React from "react";
import RiddleComponent from "../components/RiddleForm/RiddleComponent/riddle-component";
import Image from "next/image";
import gitHubIcon from "../public/github-mark.svg";
import Link from "next/link";
import FeedbackForm from "@/components/Feedback/feedback";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center bg-secondary">
      <div className="w-full max-w-md h-auto bg-primary shadow-lg rounded-xl p-6 flex flex-col items-center gap-8 mt-8 md:min-h-[90vh] md:min-w-xl lg:min-w-4xl">
        <RiddleComponent />

        <footer className="mt-auto flex flex-col items-center justify-between w-full px-6 py-4 gap-4 md:px-[10%] md:flex-row">
          <Link
            href="https://github.com/JanaGileza/riddles-app"
            className="shrink-0"
          >
            <Image
              src={gitHubIcon}
              alt="Check out my GitHub"
              width={40}
              height={40}
            />
          </Link>
          <div className="md:ml-auto">
            <FeedbackForm />
          </div>
        </footer>
      </div>
    </div>
  );
}
