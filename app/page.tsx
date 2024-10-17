import RollingCode from "@/components/rollingCode";

export default function Home() {
  return (
    <main>
      <header className="border-b border-slate-300">
        <section className="p-[70px_1.5rem_80px] bg-[url('/svg/homeCurve.svg')] bg-[0%_40%] bg-cover sm:bg-[length:125vw] relative w-full sm:w-framed max-w-[1120px] mx-auto border-x border-slate-300 flex flex-col sm:items-center content-start sm:content-center">
          <h1 className="text-5xl font-display font-medium mb-2 text-slate-950">
            Millennium Developer
          </h1>
          <span className="flex flex-row">
            <p className="text-5xl font-mono font-medium text-slate-950">@</p>
            <RollingCode />
          </span>
          <span className=" text-">Build the Efficiency</span>
        </section>
      </header>
    </main>
  );
}
