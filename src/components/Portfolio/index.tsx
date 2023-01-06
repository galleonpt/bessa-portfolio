import { FC } from "react";
import { PROJECTS_CONFIG } from "./configs";
import { IImageProps } from "./types";

const Image: FC<IImageProps> = ({ isLast, projectUrl, image }) => {
  return (
    <div className={`basis-1/3 ${!isLast ? "flex-1" : ""}`}>
      <a href={projectUrl} target="_blank">
        <img
          src={image}
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
        />
      </a>
    </div>
  );
};

export const Portfolio: FC = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span> consulted for
          <span className="text-teal-500"> startups </span> and collaborated
          with talented people to create digital products for both busisness and
          cunsumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>

      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {PROJECTS_CONFIG.map(({ image, projectUrl }, index) => (
          <Image
            key={index}
            image={image}
            projectUrl={projectUrl}
            isLast={PROJECTS_CONFIG.length - 1 === index}
          />
        ))}
      </div>
    </section>
  );
};
