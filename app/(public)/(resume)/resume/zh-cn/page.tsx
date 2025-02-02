import styles from "../resume.module.css";
import Image from "next/image";

function CnResume() {
  return (
    <section className="sections-xframe">
      <div className="sections-yframe flex flex-row items-center justify-between border-dashed">
        <h1 className="mx-6 py-4 text-3xl font-medium">钱雨萌</h1>
        <ul className="mx-6 flex flex-col py-1 text-sm">
          {/* <li>
            <span className="ml-1 font-normal text-neutral-400">地址：</span>
            安徽省 芜湖市
          </li> */}
          <li>
            <span className="ml-1 font-normal text-neutral-400">电话：</span>
            180 5539 3332{" "}
            <span className="ml-1 font-normal text-neutral-400">邮箱：</span>
            <a className="cont-anchor" href="mailto:qym200042@gmail.com">
              qym200042@gmail.com
            </a>
          </li>
          <li>
            <span className="ml-1 font-normal text-neutral-400">
              领英(国际)：
            </span>
            <a
              className="cont-anchor"
              href="https://www.linkedin.com/in/yumeng-qian/"
            >
              www.linkedin.com/in/yumeng-qian/
            </a>
          </li>
          <li>
            <span className="ml-1 font-normal text-neutral-400">GitHub: </span>
            <a className="cont-anchor" href="https://github.com/PrainLopez">
              github.com/PrainLopez
            </a>
          </li>
        </ul>
      </div>
      <div className="sections-yframe border-dashed py-2">
        <h1 className={`cont-heading ${styles.heading} mb-1 py-0`}>教育经历</h1>
        <p className="cont-content my-1 flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end">18.09-23.08</span>
          <Image
            src="/img/MUST.png"
            height={24}
            width={24}
            alt="MUST"
            className="mr-1 h-6 w-6"
          />
          <span className="font-semibold">澳门科技大学</span>
          <span className="my-0 ml-2 font-serif">
            软件技术及其应用 理学学士学位
          </span>
        </p>
        <ul className="cont-content">
          <li className="text-xs font-semibold">
            专业课程：
            <span className="font-normal">
              计算机程序设计，微积分，数据结构，线性代数与概率统计，离散数学,Web技术概论,
              面向对象程序设计，计算机图形基础，数据库系统，计算机网络，网络程序设计，操作系统，软件工程,
              编译原理，人工智能基础
            </span>
          </li>
          <li className="cont-ulist">
            Huawei ICT Competition Macau SAR 2021-2022 and 2022-2023 (2terms)
            Final Contest.
          </li>
        </ul>
        <p className="cont-content flex flex-row">
          <span className="mr-3 flex w-[6rem] justify-end">
            24.09<em className="text-neutral-400">-25.09</em>
          </span>
          <Image
            src="/img/UoS.png"
            height={24}
            width={24}
            alt="UoS"
            className="mr-1 h-6 w-6"
          />
          <span className="font-semibold">谢菲尔德大学</span>
          <span className="my-0 ml-2 font-serif">Information Systems MSc</span>
        </p>
        <ul className="cont-content">
          <li className="text-xs font-semibold">
            专业课程：
            <span className="font-normal">
              Information Systems in Organisations, Information Systems
              Modelling, Information Systems and the Information Society,
              User-Centered design and Human-Computer Interaction.
            </span>
          </li>
        </ul>
      </div>
      <div className="sections-yframe border-dashed py-2">
        <h1 className={`cont-heading ${styles.heading} mb-1 py-0`}>工作经历</h1>
        <p className="cont-content my-1 flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end">23.08-24.02</span>
          <span className="font-semibold">安徽瑞迪微电子有限公司</span>
          <span className="ml-2 font-serif">初级软件开发工程师（实习）</span>
        </p>
        <ul className="cont-content text-sm">
          <li className="cont-ulist">
            参与二次开发和维护基于EJB和数据库的MES系统，工作期间开发3个新特性并通过测试上线
          </li>
          <li className="cont-ulist">
            参与基于Spring +
            Vue的WMS系统的交付测试，完成多项流程的测试任务。过程中提交6项反馈意见，协助团队上线新系统
          </li>
          <li className="cont-ulist">
            基于品控部门同事提出的需求，独自分析，设计，开发一个web工具，自动化品控部门的数据检查工作，并被品控部门采用
          </li>
        </ul>
      </div>
      <div className="sections-yframe border-dashed py-2">
        <h1 className={`cont-heading ${styles.heading} mb-1 py-0`}>项目经历</h1>
        <p className="cont-content my-1 flex flex-row align-baseline">
          <span className="mr-4 flex w-[6rem] justify-end">22.09-23.01</span>
          <span className="font-semibold">本科毕业设计</span>
          <em className="font- ml-2 font-serif">
            基于Scikit-Learn库和手势识别数据集的机器学习模型
          </em>
        </p>
        <ul className="cont-content text-sm">
          <li className="cont-ulist">
            基于Scikit-Learn库和手势识别数据集的机器学习模型。通过建立机器学习模型，探索手捕数据集的手势分类在不同算法下的性能调优
          </li>
          <li className="cont-ulist">
            本文使用Scikit-Learn
            Python机器学习库，探究构建机器识别手势的搭建与训练流程
          </li>
          <li className="cont-ulist">
            课题比较了两个算法所生成的模型的性能，并通过调参少量优化其性能，将模型输出权重反向用于分析数据集并整理结论
          </li>
        </ul>
        <p className="cont-content my-1 flex flex-row align-baseline">
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
            使用TypeScript编写的微服务，用于从API接收自然语言，通过ChatGPT处理成记账数据后存储
          </li>
          <li className="cont-ulist">
            项目来源于生活中随手记账的需求，因对现有的记账软件数据安全感到担忧，故设计此程序在不同服务和应用之间接受，处理和转移数据
          </li>
          <li className="cont-ulist">
            使用了便于模块化的设计模式，可以切换不同流程的代码以适配不同API
          </li>
        </ul>
        <p className="cont-content my-1 flex flex-row align-baseline">
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
            个人网站，用Next.js框架编写（原本想要使用Nuxt，但迫于生态系统不成熟而放弃）
          </li>
          <li className="cont-ulist">
            项目除了个人展示外，还作为个人前端技术的试验场，探索前端主要元框架的开发生态
          </li>
        </ul>
        <p className="cont-content my-1 flex flex-row align-baseline">
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
            一个网页小工具，读取csv文件并根据预设条件过滤结果显示在网页上
          </li>
          <li className="cont-ulist">
            在瑞迪微电子工作期间，质检部门同事提出想要自动化其部分工作流程，本人提出了解决方案，并在2周内独自完成了开发和部署工作，最终被质检部门采用
          </li>
        </ul>
      </div>
      <div className="sections-yframe border-dashed py-2">
        <h1 className={`cont-heading ${styles.heading} mb-1 py-0`}>职业技能</h1>
        <ul className="cont-content text-sm">
          <li className="cont-ulist">
            前端：能够熟练使用JavaScript语言，对TypeScript编程有一定程度了解，熟练掌握前端HTML，CSS等web基础，关注国内外前端技术生态
          </li>
          <li className="cont-ulist">
            对C，C++，Python，Go，Rust语言有一定编程经验，对Java，SQL有一定工作经验
          </li>
          <li className="cont-ulist">能够熟练使用Git和Visual Studio Code</li>
        </ul>
      </div>
    </section>
  );
}

export default CnResume;
