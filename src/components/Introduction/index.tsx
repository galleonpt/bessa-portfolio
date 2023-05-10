import { FC } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaPaypal } from "react-icons/fa";
import { BsTwitch } from "react-icons/bs";
import portrait from "../../assets/portrait.png";

export const Introduction: FC = () => {
  return (
    <>
      <section className="min-h-screen">
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Claúdio Bessa
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
            Software Developer and Designer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-4xl mx-auto dark:text-white">
            Hello! I am currently finishing my bachelors degree in software 
            engineering where I considered I have gained a solid understanding of 
            various programming concepts and software development methodologies.
            Also developed a few projects on my own where I explore different methods,
            languages and worlds! I am excited to continue my journey in 
            the programming world and see what the future holds for me.
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-white">
          <a href="https://github.com/assebc/" target="_blank">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/claudio-bessa/" target="_blank">
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.youtube.com/channel/UCYXW07u06W_eyY_GMJcQDaw"
            target="_blank"
          >
            <AiFillYoutube />
          </a>
          <a href="https://www.twitch.tv/bessitos" target="_blank">
            <BsTwitch size={48} />
          </a>
          <a href="https://www.instagram.com/bessitos_" target="_blank">
            <AiFillInstagram />
          </a>
          <a href="https://paypal.me/bessa11" target="_blank">
            <FaPaypal />
          </a>
        </div>

        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <img src={portrait} className="mt-5" />
        </div>
      </section>
    </>
  );
};
