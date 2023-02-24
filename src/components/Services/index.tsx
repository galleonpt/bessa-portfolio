import { FC, useCallback } from "react";
import { SERVICES_CARDS_CONFIG } from "./configs";
import { IServiceCardProps } from "./types";

const ServiceCard: FC<IServiceCardProps> = ({
  description,
  image,
  subtitle,
  title,
  tools,
}) => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200 flex-1">
      <img src={image} width={100} height={100} className="mx-auto" />
      <h3 className="text-lg font-medium pt-8 pb-2">{title}</h3>
      <p className="py-2">{description}</p>
      <h4 className="py-4 text-teal-600">{subtitle}</h4>
      {tools.map(({ name, contact }, index) => {
        return (
          <p key={index} className="text-gray-800 py-1">
            {contact ? (
              <a href={`${contact}`} target="_blank">
                {name}
              </a>
            ) : (
              <>{name}</>
            )}
          </p>
        );
      })}
    </div>
  );
};

export const Services: FC = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
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

      <div className="lg:flex gap-10">
        {SERVICES_CARDS_CONFIG.map(
          ({ description, image, subtitle, title, tools }, index) => (
            <ServiceCard
              key={index}
              title={title}
              description={description}
              image={image}
              subtitle={subtitle}
              tools={tools}
            />
          )
        )}
      </div>
    </section>
  );
};
