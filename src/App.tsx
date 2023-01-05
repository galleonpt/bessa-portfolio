import { useState } from "react";
import "./styles/global.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import portrait from "./assets/portrait.png";
import design from "./assets/design.png";
import code from "./assets/code.png";
import consulting from "./assets/consulting.png";
import loginTemplate from "./assets/loginTemplate.png";
import onlyFeiras from "./assets/onlyFeiras.png";
import carGame from "./assets/carGame.png";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleCopyToClipboard = async () => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText("bessitos_#9635");
      alert("Copied!");
    }
    return;
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className={`bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800`}>
        <section className="min-h-screen">
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

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Claúdio Bessa
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Fullstack-Developer and Designer
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
            <a
              href="https://www.linkedin.com/in/claudio-bessa/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <img src={portrait} className="mt-5" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span> consulted for
              <span className="text-teal-500"> startups </span> and collaborated
              with talented people to create digital products for both busisness
              and cunsumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          {/* cards */}
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200 flex-1">
              <img src={design} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Design
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200 flex-1">
              <img src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Lets make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">
                Programming Languages I use
              </h4>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">C++</p>
              <p className="text-gray-800 py-1">.Net Core</p>
              <p className="text-gray-800 py-1">HTML/CSS/JS</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200 flex-1">
              <img
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Reach me via</h4>
              <p
                className="text-gray-800 py-1 cursor-pointer"
                onClick={handleCopyToClipboard}
              >
                Discord
              </p>
              <p className="text-gray-800 py-1">
                <a href="mailto:bessaprofessional@gmail.com">Email</a>
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span> consulted for
              <span className="text-teal-500"> startups </span> and collaborated
              with talented people to create digital products for both busisness
              and cunsumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a
                href="https://github.com/assebc/login-template"
                target="_blank"
              >
                <img
                  src={loginTemplate}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="#">
                <img
                  src={onlyFeiras}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </a>
            </div>
            {/* flex-1 foi removido para fazer a imagem ficar encostada a direta.
            Caso ficasse com o flex-1 ela ocuparia o espaço todo */}
            <div className="basis-1/3">
              <a
                href="https://github.com/assebc/uminho-lei/tree/main/3rd_year/IA%20(Artificial%20Intelligense)/project"
                target="_blank"
              >
                <img
                  src={carGame}
                  className="rounded-lg object-cover"
                  width={"90%"}
                  height={"90%"}
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
