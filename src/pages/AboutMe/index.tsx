import { FC } from "react";
import { Introduction } from "../../components/Introduction";
import { Portfolio } from "../../components/Portfolio";
import { Services } from "../../components/Services";

export const AboutMe: FC = () => {
  return (
    <>
      <Introduction />
      <Services />
      <Portfolio />

      {/* Hobbies Section */}
      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Hobbies</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            I also have a youtube channel where I plan to share some random
            things I do in my life and I want to share with people, such trips,
            funny activities, vlogs and also software related.
          </p>
        </div>
      </section>

      <section className="flex justify-center mt-5 mb-10 ">
        <div className="text-center text-2xl font-bold outline-dashed rounded p-2">
          <iframe
            className="rounded"
            height={400}
            width={600}
            src="https://www.youtube.com/embed/8T5ByIsn7FY?autoplay=1&mute=1"
          ></iframe>
          <p>Latest Youtube Video</p>
        </div>
      </section>
    </>
  );
};
