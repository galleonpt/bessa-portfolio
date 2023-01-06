import { FC, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Header: FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl dark:text-white">assebc</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl dark:text-white"
            onClick={() => setDarkMode(!darkMode)}
          />
        </li>
        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
