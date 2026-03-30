import Image from "next/image";

function CnResume() {
  return (
    <>
      <section className="sections-yframe">
        <section className="sections-xframe flex flex-row items-center justify-between p-3">
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
        <section className="sections-xframe p-2">
          <h1 className={`cont-heading py-0`}>教育经历</h1>

          <p className="cont-content my-2 flex flex-row">
            <span className="mr-4 flex w-[6rem] justify-center">
              24.09-26.01
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
              Information Systems MSc（信息系统 硕士）
            </span>
          </p>
          {/* <p className="ml-1 text-xs font-semibold">
            {"Related Courses: "}
            <span className="font-normal">
              Information Systems Project Management, Information Systems
              Modeling
            </span>
          </p> */}
          <p className="cont-content flex flex-row align-baseline">
            <span className="my-0 ml-4 font-serif font-semibold">
              学位论文：HumanEval-Perturbed - LLM Evaluation on Code Generation
              and Token Bias
            </span>
          </p>
          <ul className="cont-content ml-2 text-sm">
            <li className="cont-ulist">
              基于苹果机器学习研究院的 <code>GSM-Symbolic</code>{" "}
              论文，探索性研究了 LLM 在代码生成任务中的真实推理能力。
            </li>
            <li className="cont-ulist">
              该研究在 <code>HumanEval</code> 的基础上引入了提示变换，以测试 LLM
              对逻辑陷阱的鲁棒性。
            </li>
            <li className="cont-ulist">
              该研究从统计学角度验证了 LLM 在代码生成中存在 token
              偏见。然而本实验的检验力受到样本大小的限制。
            </li>
          </ul>
          <p className="cont-content my-2 flex flex-row align-baseline">
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
            <span className="flex flex-row gap-2">
              <span className="font-semibold">澳门科技大学</span>
              <span className="my-0 font-serif">软件技术与应用学士</span>
            </span>
          </p>
          {/* <p className="ml-1 text-xs font-semibold">
            {"Related Courses: "}
            <span className="font-normal">
              Data Structure, Software Engineering, Computer Network, Operating
              System, Web Programming
            </span>
          </p> */}
          <p className="cont-content flex flex-row align-baseline">
            <span className="my-0 ml-4 font-serif font-semibold">
              毕业设计：基于 Scikit-Learn 库和手势识别数据集的机器学习模型
            </span>
          </p>
          <ul className="cont-content ml-2 text-sm">
            <li className="cont-ulist">
              围绕手势识别数据集进行机器学习/数据挖掘项目。
            </li>
            <li className="cont-ulist">
              使用 Scikit-Learn 库处理数据并训练机器学习模型。
            </li>
            <li className="cont-ulist">
              比较和测试了多种机器学习算法，并分析优化了它们的性能。
            </li>
          </ul>
          {/* <p className="cont-content flex flex-row gap-2 p-1 align-baseline">
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
          </p> */}
        </section>
      </section>
      <section className="sections-yframe">
        <section className="sections-xframe p-2">
          <h1 className={`cont-heading py-0`}>工作经历</h1>

          <p className="cont-content flex flex-row pt-2 align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center">
              24.06-24.08
            </span>
            <span className="font-semibold">镜兔网络</span>
            <span className="ml-2 font-serif">前端工程师</span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              带领4人团队开发新聊天产品，技术选型为基于 React Router (V7) 和
              React Query 的 SPA 应用。
            </li>
            <li className="cont-ulist">
              为前端团队代码库设置 CI/CD 管道，包括自动化 ESlint 代码检查。
            </li>
            <li className="cont-ulist">
              与后端团队合作，构建 API 接口，提供与后端团队 RESTful API
              对接方案建议。
            </li>
          </ul>
          <p className="cont-content flex flex-row pt-2 align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center">
              23.08-24.02
            </span>
            <span className="font-semibold">安徽瑞迪微电子有限公司</span>
            <span className="ml-2 font-serif">
              软件开发实习生（制造执行系统 MES）
            </span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              二次开发和维护基于 Oracle SQL 和 Enterprise JavaBeans
              (EJB)的制造执行系统（MES），
              贡献了三个新功能组件并成功集成到生产环境中。
            </li>
            <li className="cont-ulist">
              参与测试和部署一个基于 Spring Data 和
              Vue的新系统，提供有见地的反馈和错误报告，推动系统按期部署。
            </li>
            <li className="cont-ulist">
              分析同事的需求，开发自动化网页工具以优化质检工作流程，提高工作效率。
            </li>
          </ul>
        </section>
      </section>
      <section className="sections-yframe">
        <section className="sections-xframe p-2">
          <h1 className={`cont-heading py-0`}>项目经验</h1>
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
              谢菲尔德大学 iForge Hackathon
              参赛作品：一个绘图机械臂，根据用户提示使用 Gemini 控制机械臂画图。
            </li>
            <li className="cont-ulist">
              该程序调用 Gemini API
              根据提示词生成绘图坐标，然后将坐标处理为绘图机器人的电机指令。
            </li>
            <li className="cont-ulist">
              作为4人团队中的主要程序员参与，负责 Gemini API 的集成代码。
            </li>
            <li className="cont-ulist">团队作品获得了最佳 Gemini 创意奖。</li>
          </ul>
          <p className="cont-content flex flex-row align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center font-serif font-semibold">
              YuroAI
            </span>
            <span className="font-semibold">
              <span
                className="text-gray-500"
              >
                (私有仓库，项目进行中)
              </span>
            </span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              AI主播Demo，使用B站直播间API，结合GLM-4.5和TTS与直播间实现互动
            </li>
            <li className="cont-ulist">
              本项目作为AI主播的Demo实现，探索了AI技术在直播市场的潜力
            </li>
          </ul>
          <p className="cont-content flex flex-row align-baseline">
            <span className="mr-4 flex w-[6rem] justify-center font-serif font-semibold">
              ShAiPoster
            </span>
            <span className="font-semibold">
              <a
                className="cont-anchor"
                href="https://github.com/PrainLopez/ShAiPoster"
              >
                github.com/PrainLopez/ShAiPoster
              </a>
            </span>
          </p>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              TanStack Start Hackathon 参赛作品：使用AI模型“锐评”推文。
            </li>
            <li className="cont-ulist">
              带领2人团队，使用Tanstack Start开发，集成Grok 4 Fast模型
            </li>
            <li className="cont-ulist">
              Demo 内容详见 <a className="cont-anchor mx-1" href="https://vibeapps.dev/s/shaiposter">ShAIposter | VibeApps</a>
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
              一个本地网页工具，用于解析 CSV 文件并根据预设规则集过滤异常数据。
            </li>
            <li className="cont-ulist">
              主动提出方案，自行选型和开发，并在2周内交付，得到质检部门同事采用。
            </li>
            <li className="cont-ulist">
              使用 jQuery 和 Vite 开发，镜像版本部署在 Cloudflare Pages 上。
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
              目标用于个人开支记账和可视化，因市面上缺少跨币种的记账软件，故而自建此应用。
            </li>
            <li className="cont-ulist">
              后端先后重构多次，使用过 Express 和 Hono.js
              框架，作为自己学习服务器端 JavaScript/TypeScript 的试验项目。
            </li>
            <li className="cont-ulist">
              目前迭代基于Next.js前端/Supabase低代码托管后端，已经实际用于个人平日记账。
            </li>
          </ul>
        </section>
      </section>
      <section className="sections-yframe">
        <section className="sections-xframe p-2">
          <h1 className={`cont-heading py-0`}>职业技能</h1>
          <ul className="cont-content text-sm">
            <li className="cont-ulist">
              <strong>前端：</strong>
              熟悉 React 和 Vue 框架。深入理解 JavaScript 及其生态系统。具有
              Next.js 等元框架的开发经验。
            </li>
            <li className="cont-ulist">
              <strong>编程语言：</strong>熟练掌握 JavaScript、TypeScript、Java
              和 Python 编程。具有 C、C# 和 Go 的入门经验。
            </li>
            <li className="cont-ulist">
              <strong>开发者工具：</strong>
              熟练掌握 Git、VScode、JetBrains IDE，了解前端 CI/CD
              自动化开发预览部署流程。对 AWS、GCP 和 Azure
              等云平台有一定使用经验。
            </li>
            <li className="cont-ulist">
              <strong>数据库：</strong>
              熟悉 Oracle SQL、MySQL 和 PostgreSQL。掌握 SQL 语言。有 Drizzle
              ORM 实际使用经验。
            </li>
            <li className="cont-ulist">
              <strong>AI技术开发：</strong>
              熟悉 ai-sdk、Hugging Face 等主流 AI 平台和工具。了解模型测评、部署、Agent系统搭建等流程。
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default CnResume;
