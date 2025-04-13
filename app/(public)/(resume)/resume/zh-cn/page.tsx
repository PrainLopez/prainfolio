import styles from "../resume.module.css";
import Image from "next/image";

function CnResume() {
  return (
    <>
      <section className="sections-yframe">
        <section className="sections-xframe flex flex-row items-center justify-between">
          <h1 className="mx-6 py-4 text-3xl font-medium">钱雨萌</h1>
          <ul className="mx-6 flex flex-col py-1 text-sm">
            <li>
              <span className="ml-1 font-semibold text-neutral-400">
                电话:{" "}
              </span>
              180 5539 3332{" "}
              <span className="ml-1 font-semibold text-neutral-400">
                邮箱:{" "}
              </span>
              <a className="cont-anchor" href="mailto:qym200042@gmail.com">
                qym200042@gmail.com
              </a>
            </li>
            <li>
              <span className="ml-1 font-semibold text-neutral-400">
                领英（国际）:{" "}
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
          <h1 className={`cont-heading ${styles.heading} py-1`}>
            教育经历和认证
          </h1>

          <p className="cont-content my-1 flex flex-row py-1">
            <span className="mr-4 flex w-[6rem] justify-center">
              24.09-25.09
            </span>
            <Image
              src="/img/UoS.png"
              height={64}
              width={64}
              alt="UoS"
              className="mr-1 h-6 w-6"
            />
            <span className="font-semibold">谢菲尔德大学</span>
            <span className="my-0 ml-2 font-serif">
              Information Systems MSc
            </span>
          </p>
          <p className="cont-content my-1 flex flex-row py-1 align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center">
              18.09-23.08
            </span>
            <Image
              src="/img/MUST.png"
              height={64}
              width={64}
              alt="MUST"
              className="mr-1 h-6 w-6"
            />
            <div className="flex flex-row gap-2">
              <span className="font-semibold">澳门科技大学</span>
              <span className="my-0 font-serif">
                软件技术及其应用 理学学士学位
              </span>
            </div>
          </p>
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
          <h1 className={`cont-heading ${styles.heading} py-1`}>工作经历</h1>

          <p className="cont-content flex flex-row align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center">
              24.06-24.08
            </span>
            <span className="font-semibold">镜兔网络</span>
            <span className="ml-2 font-serif">前端开发工程师</span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              带领4人团队开发了一个基于React的IM应用前端，使用了React
              Router和Tailwind CSS。
            </li>
            <li className="cont-ulist">
              与后端团队合作，与开发中的后端API交互技术反馈，确保前端和后端的无缝集成。
            </li>
          </ul>
          <p className="cont-content flex flex-row align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center">
              23.08-24.02
            </span>
            <span className="font-semibold">安徽瑞迪微电子有限公司</span>
            <span className="ml-2 font-serif">初级软件开发工程师</span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              参与⼆次开发和维护基于EJB和数据库的MES系统，⼯作期间开发3个新特性并通过测试上线
            </li>
            <li className="cont-ulist">
              参与基于Spring +
              Vue的WMS系统的交付测试，完成多项流程的测试任务。过程中提交6项反馈意⻅，协助团队顺利上线新系统
            </li>
            <li className="cont-ulist">
              基于品控部⻔同事提出的需求，独⾃分析，设计，开发⼀个web⼯具，⾃动化品控部⻔的数据检查⼯作，并被品控部⻔采⽤
            </li>
          </ul>
        </section>
      </section>
      <section className="sections-yframe">
        <section className="sections-xframe p-1">
          <h1 className={`cont-heading ${styles.heading} py-1`}>项目经历</h1>
          <p className="cont-content flex flex-row align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center">
              本科毕业设计
            </span>
            <span className="my-0 font-serif font-semibold">
              基于 Scikit-Learn ⼿势识别数据集的机器学习模型
            </span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              基于 Scikit-Learn
              ⼿势识别数据集的机器学习模型。通过建⽴机器学习模型，探索⼿捕数据集的⼿势分类在不同算法下的性能调优
            </li>
            <li className="cont-ulist">
              本⽂使⽤ Scikit-Learn
              机器学习库，探究构建机器识别⼿势的搭建与训练流程
            </li>
            <li className="cont-ulist">
              课题⽐较了几种算法所⽣成的模型的性能，并通过调参少量优化其性能，将模型输出权重反向⽤于分析数据集并整理结论
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
              ⼀个⽹⻚⼩⼯具，读取csv⽂件并根据预设条件过滤结果显示在⽹⻚上
            </li>
            <li className="cont-ulist">
              在瑞迪微电⼦⼯作期间，质检部⻔同事提出想要⾃动化其部分⼯作流程，此⼯具正是为此⽽开发
            </li>
            <li className="cont-ulist">
              在2周内独⾃完成了开发和部署⼯作，最终被质检部⻔采⽤
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
              使⽤TypeScript编写的服务，⽤于从API接收⾃然语⾔，通过ChatGPT处理成记账数据后存储
            </li>
            <li className="cont-ulist">
              项⽬来源于⽣活中随⼿记账的需求，因对现有的记账软件的多币种使用和输入时多便捷性感到不满，故设计此程序在不同服务和应⽤之间接受，处理和转移数据
            </li>
            <li className="cont-ulist">
              带有一个前端界面用于展示数据和操作，前端使用了Vue
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
          <h1 className={`cont-heading ${styles.heading} py-1`}>职业技能</h1>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              <strong>前端：</strong>
              能够熟练使⽤JavaScript语⾔，对TypeScript编程有⼀定程度了解，熟练掌握前端HTML，CSS等
              web基础，熟悉前端开发的⼯作流⽀持，并在Vue和React框架下均有实际开发经验
            </li>
            <li className="cont-ulist">
              <strong>编程语言：</strong>
              对C，Python，Go语⾔有⼀定编程经验，拥有Java和TypeScript的实际开发经验
            </li>
            <li className="cont-ulist">
              <strong>开发者工具：</strong>
              掌握VScode及JetBrains系IDE的使用。能够熟练使⽤Git，对GitHub和GitLab有实际合作经验，对前端的CI/CD流程有一定了解。
            </li>
            <li className="cont-ulist">
              <strong>数据库：</strong>
              工作经历有接触Oracle
              SQL数据库，在个人项目中使用过MySQL和PosgreSQL。且使用过多个语言的ORM框架。
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default CnResume;
