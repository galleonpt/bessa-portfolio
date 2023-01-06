import { FC } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import portrait from "../../assets/portrait.png";

export const Introduction: FC = () => {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Claúdio Bessa
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
          Software Developer and Designer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
          Freelancer providing services for programming and design content
          needs. Join me down below and let's get cracking!
        </p>
      </div>

      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
        <a href="https://github.com/assebc/" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/claudio-bessa/" target="_blank">
          <AiFillLinkedin />
        </a>
      </div>

      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <img src={portrait} className="mt-5" />
      </div>
    </>
  );
};
