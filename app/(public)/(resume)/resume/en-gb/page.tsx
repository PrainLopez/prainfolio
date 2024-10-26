import styles from "../resume.module.css";
import Image from "next/image";

function EnResume() {
  return (
    <section className="sections-xframe">
      <div className="sections-yframe flex flex-row items-center justify-between border-dashed">
        <h1 className="mx-6 py-4 text-3xl font-medium">Yumeng Qian</h1>
        <ul className="mx-6 flex flex-col py-1 text-sm">
          <li>
            <span className="ml-1 font-semibold text-neutral-400">
              Address:{" "}
            </span>
            Westhill Hall, 61 Eldon Street, Sheffield, S1 4NJ, UK
          </li>
          <li>
            <span className="ml-1 font-semibold text-neutral-400">
              Mobile:{" "}
            </span>
            777 6700863{" "}
            <span className="ml-1 font-semibold text-neutral-400">Email: </span>
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
      </div>
      <div className="sections-yframe border-dashed">
        <h1 className={`cont-heading ${styles.heading} py-0`}>
          Education and qualifications
        </h1>
        <p className="cont-content flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end">09/18-08/23</span>
          <Image
            src="/img/MUST.png"
            height={24}
            width={24}
            alt="MUST"
            className="mr-1 h-6 w-6"
          />
          <span className="font-semibold">
            Macau University of Science and Technology
          </span>
        </p>
        <span className="my-0 ml-[9.8rem] font-serif">
          Software Technology and Application BS
          <span className="font-sans"> (3.)</span>
        </span>
        <ul className="cont-content">
          <li className="text-xs font-semibold">
            Relevant Modules:
            <span className="font-normal">
              Computer Programming, Calculus For EECS, Data Structures, Linear
              Algebra, Discrete Mathmatics, Probability and Statistics,
              Introduction to Web Technology, Object-Oriented Programming,
              Fundamentals of Computer Graphics, Database Systems, Computer
              Networks, Network Programming, Operating Systems, Software
              Engineering, Principles of Compilers, Fundamentals of Artificial
              Intelligence.
            </span>
          </li>
          <li className="cont-ulist">
            Huawei ICT Competition Macau SAR 2021-2022 and 2022-2023 (2terms)
            Final Contest.
          </li>
        </ul>
        <p className="cont-content flex flex-row">
          <span className="mr-4 flex w-[6rem] justify-end">
            09/24<em className="text-neutral-400">-09/25</em>
          </span>
          <Image
            src="/img/UoS.png"
            height={24}
            width={24}
            alt="UoS"
            className="mr-1 h-6 w-6"
          />
          <span className="font-semibold">University of Sheffield</span>
        </p>
        <span className="my-0 ml-[9.8rem] font-serif">
          Information Systems MSc
          <em className="font-sans text-neutral-400"> (Predicted min 2.1)</em>
        </span>
        <ul className="cont-content">
          <li className="text-xs font-semibold">
            Relevant Modules:
            <span className="font-normal">
              Information Systems in Organisations, Information Systems
              Modelling, Information Systems and the Information Society,
              User-Centered design and Human-Computer Interaction.
            </span>
          </li>
        </ul>
      </div>
      <div className="sections-yframe border-dashed">
        <h1 className={`cont-heading ${styles.heading} py-0`}>
          Work Experience
        </h1>
        <p className="cont-content flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end">08/23-02/24</span>
          <span className="font-semibold">Red Power micro electronics</span>
          <span className="ml-2 font-serif">
            Junior Software Engineer (Internship)
          </span>
        </p>
        <ul className="cont-content text-sm">
          <li className="cont-ulist">
            Developed and maintained a MES system based on Oracle SQL and EJB.
            Delivered 3 new functional beans at the job. All pass the tests then
            merged into production.
          </li>
          <li className="cont-ulist">
            Participated in testing a new system powered by Spring Data + Vue.
            Proposed 6 test feedback and bug report to the team. Collaborated
            with the sector to put new management system into production.
          </li>
          <li className="cont-ulist">
            Analysed demand from colleagues, conducted development of a web
            tool. The tool received adoption of the QA sector for automation of
            routines.
          </li>
        </ul>
      </div>
      <div className="sections-yframe border-dashed">
        <h1 className={`cont-heading ${styles.heading} py-0`}>
          Project Experience
        </h1>
        <p className="cont-content flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end">09/22-01/23</span>
          <span className="font-semibold">Bachelor's Final Year Project</span>
        </p>
        <span className="my-0 ml-[8rem] font-serif text-sm">
          Hand Postures Motion Capture Recognition Machine Learning Model by
          Scikit-Learn.
        </span>
        <ul className="cont-content text-sm">
          <li className="cont-ulist">
            Machine Learning Application study based on dataset from Hand
            Posture Capture.
          </li>
          <li className="cont-ulist">
            Utilize Sci-kit Learn Python library to process the data and train
            ML model. Worked with Google Colab service in the process.
          </li>
          <li className="cont-ulist">
            Compare, fine-tune and test 2 ML algorithems then analyse the
            performance.
          </li>
        </ul>
        <p className="cont-content flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end font-serif font-semibold">
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
            TypeScript Microservice accounting tool processing natural language
            with chatGPT.
          </li>
          <li className="cont-ulist">
            The project started with daily expense accounting, instead of
            existing accounting App, the project tries to use messaging app as
            input, whilst note app as output.
          </li>
          <li className="cont-ulist">
            Designed with modular design pattern adapting to APIs. Dockerized
            and scaleable.
          </li>
        </ul>
        <p className="cont-content flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end font-serif font-semibold">
            prainfolio
          </span>
          <span className="font-semibold">
            <a
              className="cont-anchor"
              href="https://github.com/PrainLopez/prainfolio"
            >
              github.com/PrainLopez/prainfolio
            </a>
          </span>
        </p>
        <ul className="cont-content text-sm">
          <li className="cont-ulist">
            Personal website powered by Next.js(Nuxt previously).
          </li>
          <li className="cont-ulist">
            This project is for exploring the Frontend Meta-framework and
            ecosystem.
          </li>
        </ul>
        <p className="cont-content flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end font-serif font-semibold">
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
            Web tool parsing csv file and filtering lines according to ruleset.
          </li>
          <li className="cont-ulist">
            QA sector colleagues suggested to automate data checking. The
            project was to serve the demand.
          </li>
          <li className="cont-ulist">
            Developed and delivered within 2 weeks.
          </li>
        </ul>
      </div>
      <div className="sections-yframe border-dashed">
        <h1 className={`cont-heading ${styles.heading} py-0`}>
          Professional Skills
        </h1>
        <ul className="cont-content text-sm">
          <li className="cont-ulist">
            Intermediate knowledge to JavaScript, Basic experience to
            TypeScript. Priliminary developing experience to the React and Vue.
            Acknowledge the Frontend ecosystem and TC39 updates.
          </li>
          <li className="cont-ulist">
            Basic level develop experience to following programming language: C,
            C++, Java, Python, Go, SQL and Rust.
          </li>
          <li className="cont-ulist">
            Efficient with Git, Visual Studio Code.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default EnResume;
