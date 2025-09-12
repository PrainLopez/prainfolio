import styles from "../resume.module.css";
import Image from "next/image";

function EnResume() {
  return (
    <>
      <section className="sections-yframe">
        <section className="sections-xframe flex flex-row items-center justify-between">
          <h1 className="mx-6 py-4 text-3xl font-medium">Yumeng Qian</h1>
          <ul className="mx-6 flex flex-col py-1 text-sm">
            <li>
              <span className="ml-1 font-semibold text-neutral-400">
                Address:{" "}
              </span>
              Flat A10-E, Steel City, 60 Garden St, Sheffield, S1 4UE, UK
            </li>
            <li>
              <span className="ml-1 font-semibold text-neutral-400">
                Mobile:{" "}
              </span>
              +44 777 6700863{" "}
              <span className="ml-1 font-semibold text-neutral-400">
                Email:{" "}
              </span>
              <a className="cont-anchor" href="mailto:qym200042@gmail.com">
                qym200042@gmail.com
              </a>
            </li>
            <li>
              <span className="ml-1 font-semibold text-neutral-400">
                Linkdin:{" "}
              </span>
              <a
                className="cont-anchor"
                href="https://www.linkedin.com/in/yumeng-qian/"
              >
                www.linkedin.com/in/yumeng-qian/
              </a>
            </li>
            <li>
              <span className="ml-1 font-semibold text-neutral-400">
                GitHub:{" "}
              </span>
              <a className="cont-anchor" href="https://github.com/PrainLopez">
                github.com/PrainLopez
              </a>
            </li>
          </ul>
        </section>
      </section>
      <section className="sections-yframe">
        <section className="sections-xframe p-1">
          <h1 className={`cont-heading ${styles.heading} py-0`}>
            Education & Certificates
          </h1>

          <p className="cont-content my-1 flex flex-row">
            <span className="mr-4 flex w-[6rem] justify-center">
              09/24-09/25
            </span>
            <Image
              src="/img/UoS.png"
              height={64}
              width={64}
              alt="UoS"
              className="mr-1 h-6 w-6"
            />
            <span className="font-semibold">University of Sheffield</span>
            <span className="my-0 ml-2 font-serif">
              Information Systems MSc
            </span>
          </p>
          <p className="ml-1 text-xs font-semibold">
            {"Related Courses: "}
            <span className="font-normal">
              Information Systems Project Management, Information Systems
              Modeling
            </span>
          </p>
          <p className="cont-content flex flex-row align-baseline">
            <span className="my-0 ml-4 font-serif font-semibold">
              Degree Project: HumanEval-Perturbed - LLM Evaluation on Code
              Generation and Token Bias
            </span>
          </p>
          <ul className="cont-content ml-2 text-sm">
            <li className="cont-ulist">
              An Exploary study following <code>GSM-Symbolic</code> to validate
              genuine reasoning of LLM in code genreation task.
            </li>
            <li className="cont-ulist">
              The study introduced prompt mutation on top of{" "}
              <code>HumanEval</code> to test LLM robustness against logical
              traps.
            </li>
            <li className="cont-ulist">
              The study found statistical significance to believe that LLM
              suffers from token bias in code genration. While test lacks
              statistical power due to limited sample size.
            </li>
          </ul>
          <p className="cont-content my-1 flex flex-row align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center">
              09/18-08/23
            </span>
            <Image
              src="/img/MUST.png"
              height={64}
              width={64}
              alt="MUST"
              className="mr-1 h-6 w-6"
            />
            <span className="flex flex-row gap-2">
              <span className="font-semibold">
                Macau University of Science and Technology
              </span>
              <span className="my-0 font-serif">
                Software Technology and Application BS
              </span>
            </span>
          </p>
          <p className="ml-1 text-xs font-semibold">
            {"Related Courses: "}
            <span className="font-normal">
              Data Structure, Software Engineering, Computer Network, Operating
              System, Web Programming
            </span>
          </p>
          <p className="cont-content flex flex-row align-baseline">
            <span className="my-0 ml-4 font-serif font-semibold">
              Degree Project: Hand Postures Recognition Machine Learning
            </span>
          </p>
          <ul className="cont-content ml-2 text-sm">
            <li className="cont-ulist">
              Machine Learning / Data mining project on dataset from Hand
              Posture Capture.
            </li>
            <li className="cont-ulist">
              Utilized Sci-kit Learn to process the data and train ML model.
            </li>
            <li className="cont-ulist">
              Compared and tested multiple ML algorithems and analyseed their
              performance.
            </li>
          </ul>
          <p className="cont-content flex flex-row gap-2 p-1 align-baseline">
            <Image
              src="/img/IBMMQDevEss_L2.png"
              height={64}
              width={64}
              alt="IBM MQ Dev Essentials"
              className="h-6 w-6"
            />
            <span className="font-serif font-semibold">
              IBM MQ Dev Essentials
            </span>
          </p>
        </section>
      </section>
      <section className="sections-yframe">
        <section className="sections-xframe p-1">
          <h1 className={`cont-heading ${styles.heading} py-0`}>
            Work Experience
          </h1>

          <p className="cont-content flex flex-row align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center">
              06/24-08/24
            </span>
            <span className="font-semibold">Jingtu Network</span>
            <span className="ml-2 font-serif">
              Frontend Engineer (Contracted)
            </span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              Leading a team of 4 to develop a new chatroom product, focusing on
              frontend powered by React Router SPA and TypeScript.
            </li>
            <li className="cont-ulist">
              Setup CI/CD pipeline for the frontend team repository, including
              commit hook and automated linting check.
            </li>
            <li className="cont-ulist">
              Collaborated with the backend team to strcture the API interface,
              providing consulting suggetion on their RESTful API design.
            </li>
          </ul>
          <p className="cont-content flex flex-row align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center">
              08/23-02/24
            </span>
            <span className="font-semibold">Red Power micro electronics</span>
            <span className="ml-2 font-serif">
              Junior Software Engineer (Placement)
            </span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              Developed and maintained a Manufacturing Execution System (MES)
              using Oracle SQL and Enterprise JavaBeans (EJB), contributing
              three new functional components integrated into production.
            </li>
            <li className="cont-ulist">
              Participated in testing and deploying a new system powered by
              Spring Data and Vue, providing insightful feedback and bug reports
              to enhance system reliability.
            </li>
            <li className="cont-ulist">
              Analysed demand from colleagues, develop automation tools for QA
              processes, enhancing workflow efficiency.
            </li>
          </ul>
        </section>
      </section>
      <section className="sections-yframe">
        <section className="sections-xframe p-1">
          <h1 className={`cont-heading ${styles.heading} py-0`}>
            Project Experience
          </h1>
          <p className="cont-content flex flex-row align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center font-serif font-semibold">
              iForgeHack
            </span>
            <span className="font-semibold">
              <a
                className="cont-anchor"
                href="https://github.com/MTipuric/iForgeHackathonBestGroup"
              >
                github.com/MTipuric/iForgeHackathonBestGroup
              </a>
            </span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              University of Sheffield iForge Hackathon (MLH event) Entry: A
              drawing bot following user prompts to create art using Gemini.
            </li>
            <li className="cont-ulist">
              The program call Gemini API to generate coordinates for the
              drawing. The coordinates are then processed into motor commands
              for a drawing robot.
            </li>
            <li className="cont-ulist">
              Participated as programmer in a team of 4, responsible for Gemini
              API integration.
            </li>
          </ul>
          <p className="cont-content flex flex-row align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center font-serif font-semibold">
              ShefJam
            </span>
            <span className="font-semibold">
              <a
                className="cont-anchor"
                href="https://github.com/MichaelEE-DocSteel/ShefJam11"
              >
                github.com/MichaelEE-DocSteel/ShefJam11
              </a>
            </span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              SheffJam GameJam Entry: A 2D platformer-action game built with
              Unity.
            </li>
            <li className="cont-ulist">
              Participated as a programmer in a team of 4, responsible for core
              gameplay mechanics and code implementation.
            </li>
          </ul>
          <p className="cont-content flex flex-row align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center font-serif font-semibold">
              csv-filter
            </span>
            <span className="font-semibold">
              <a
                className="cont-anchor"
                href="https://github.com/PrainLopez/csv-filter"
              >
                github.com/PrainLopez/csv-filter
              </a>
            </span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              Web tool parsing csv file and filtering lines according to
              ruleset.
            </li>
            <li className="cont-ulist">
              Developed and delivered within 2 weeks for QA sector colleagues
              suggested to automate data checking.
            </li>
            <li className="cont-ulist">
              Powered by jQuery and Vite, deployes on Cloudflare Pages.
            </li>
          </ul>
          <p className="cont-content flex flex-row align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center font-serif font-semibold">
              noticount
            </span>
            <span className="font-semibold">
              <a
                className="cont-anchor"
                href="https://github.com/PrainLopez/noticount"
              >
                github.com/PrainLopez/noticount
              </a>
            </span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              TypeScript Microservice accounting tool designed for easy
              self-hosting.
            </li>
            <li className="cont-ulist">
              The project started with daily expense accounting, instead of
              existing accounting App, the project tries to use messaging app as
              input, whilst note app as output.
            </li>
            <li className="cont-ulist">
              Integrated with a Vue-based Frontend for basic usage.
              <a
                className="cont-anchor mx-1"
                href="https://github.com/PrainLopez/noti-page"
              >
                github.com/PrainLopez/noti-page
              </a>
            </li>
          </ul>
        </section>
      </section>
      <section className="sections-yframe">
        <section className="sections-xframe p-1">
          <h1 className={`cont-heading ${styles.heading} py-0`}>
            Professional Skills
          </h1>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              <strong>Frontend: </strong>
              Proficient with React and Vue frameworks. Deep understanding of
              JavaScript and its ecosystem. Have project experience with
              Next.js.
            </li>
            <li className="cont-ulist">
              <strong>Programming Language: </strong>Have intermediate
              experience with JavaScript, TypeScript, Java and Python. Have
              entry level experience with C#, Go and Rust.
            </li>
            <li className="cont-ulist">
              <strong>Developer toolchain: </strong>
              Experienced with Git, VScode, JetBrains IDEs, and frontend CI/CD
              pipline building. Have personal use experience with cloud
              deployment on platforms such as AWS and Azure.
            </li>
            <li className="cont-ulist">
              <strong>Database: </strong>
              Basic experience with Oracle SQL Database, MySQL and PostgreSQL.
              Have hands-on experience with Drizzle ORM.
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default EnResume;
