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
      <div className="sections-yframe border-dashed p-0.5">
        <h1 className={`cont-heading ${styles.heading} py-0`}>Education</h1>

        <p className="cont-content my-1 flex flex-row">
          <span className="mr-4 flex w-[6rem] justify-end">09/24-09/25</span>
          <Image
            src="/img/UoS.png"
            height={64}
            width={64}
            alt="UoS"
            className="mr-1 h-6 w-6"
          />
          <span className="font-semibold">University of Sheffield</span>
          <span className="my-0 ml-2 font-serif">Information Systems MSc</span>
        </p>
        <p className="cont-content my-1 flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end">09/18-08/23</span>
          <Image
            src="/img/MUST.png"
            height={64}
            width={64}
            alt="MUST"
            className="mr-1 h-6 w-6"
          />
          <div className="flex flex-col">
            <span className="font-semibold">
              Macau University of Science and Technology
            </span>
            <span className="my-0 font-serif">
              Software Technology and Application BS
            </span>
          </div>
        </p>
      </div>
      <div className="sections-yframe border-dashed p-0.5">
        <h1 className={`cont-heading ${styles.heading} py-0`}>
          Work Experience
        </h1>

        <p className="cont-content flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end">06/24-08/24</span>
          <span className="font-semibold">Jingtu Network</span>
          <span className="ml-2 font-serif">Frontend Engineer</span>
        </p>
        <ul className="cont-content text-sm">
          <li className="cont-ulist">
            Provided technical guidance to a backend engineering team on Web UI
            strategies, leading to the adoption of improved solutions.
          </li>
          <li className="cont-ulist">
            Facilitated effective communication of technical ideas and solutions
            with both technical and non-technical stakeholders.
          </li>
        </ul>
        <p className="cont-content flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end">08/23-02/24</span>
          <span className="font-semibold">Red Power micro electronics</span>
          <span className="ml-2 font-serif">
            Junior Software Engineer (Internship)
          </span>
        </p>
        <ul className="cont-content text-sm">
          <li className="cont-ulist">
            Developed and maintained a Manufacturing Execution System (MES)
            using Oracle SQL and Enterprise JavaBeans (EJB), contributing three
            new functional components integrated into production.
          </li>
          <li className="cont-ulist">
            Participated in testing and deploying a new system powered by Spring
            Data and Vue, providing insightful feedback and bug reports to
            enhance system reliability.
          </li>
          <li className="cont-ulist">
            Analysed demand from colleagues, develop automation tools for QA
            processes, enhancing workflow efficiency.
          </li>
        </ul>
      </div>
      <div className="sections-yframe border-dashed p-0.5">
        <h1 className={`cont-heading ${styles.heading} py-0`}>
          Project Experience
        </h1>
        <p className="cont-content flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end">09/22-01/23</span>
          <span className="my-0 font-serif font-semibold">
            Hand Postures Recognition Machine Learning
          </span>
        </p>
        <ul className="cont-content text-sm">
          <li className="cont-ulist">
            Bachelor final year project of ML training on dataset from Hand
            Posture Capture.
          </li>
          <li className="cont-ulist">
            Utilize Sci-kit Learn Python library to process the data and train
            ML model. Worked on Google Colab in the training process.
          </li>
          <li className="cont-ulist">
            Compare and test multiple ML algorithems and analyse their
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
      <div className="sections-yframe border-dashed p-0.5">
        <h1 className={`cont-heading ${styles.heading} py-0`}>
          Professional Skills
        </h1>
        <ul className="cont-content text-sm">
          <li className="cont-ulist">
            <strong>JavaScript: </strong>Intermediate level knowledge to ES6+
            and TypeScript.
          </li>
          <li className="cont-ulist">
            <strong>Frontend Frameworks: </strong>Entry level development
            experience. Can build full-stact architechure with meta frameworks
            like Next and Nuxt.
          </li>
          <li className="cont-ulist">
            <strong>Developer toolchain: </strong>Experienced with Git, VScode,
            JetBrains IDEs, and frontend CI/CD workflows using Vercel and
            Netlify.
          </li>
          <li className="cont-ulist">
            <strong>Database: </strong>Proficient with Oracle SQL, have hands-on
            experience with MySQL and PostgreSQL. Have experience with Drizzle
            ORM and Hibernate.
          </li>
          <li className="cont-ulist">
            <strong>Other: </strong>Have intermediate experience with Java,
            Python and Go progamming.
          </li>
        </ul>
        <div className="cont-content flex flex-row py-1 align-baseline">
          <span className="mx-2">
            <strong>Certificates: </strong>
          </span>
          <Image
            src="/img/IBMMQDevEss_L2.png"
            height={64}
            width={64}
            alt="IBM MQ Dev Essentials"
            className="mr-1 h-6 w-6"
          />
          <span className="font-serif font-semibold">
            IBM MQ Dev Essentials
          </span>
        </div>
      </div>
    </section>
  );
}

export default EnResume;
