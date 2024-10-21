import RollingCode from "@/app/(public)/(index)/rollingCode";

export default function Home() {
  return (
    <main>
      <header className="sections-yframe">
        <section className="sections-xframe flex flex-col items-center justify-between bg-[url('/svg/homeCurve.svg')] bg-cover bg-[0%_40%] p-[70px_1.5rem_80px] sm:content-center sm:items-center sm:bg-[length:125vw]">
          <h1 className="mb-2 font-display text-5xl font-medium text-slate-950">
            Millennium Developer
          </h1>
          <span className="flex flex-row">
            <p className="font-mono text-5xl text-slate-950">@</p>
            <RollingCode />
          </span>
          <span className="mt-4 font-sans text-lg text-slate-500">
            Study is decapsulation.
          </span>
        </section>
      </header>

      <article className="sections-yframe">
        <section className="sections-xframe">
          <h1>Lorem ipsum</h1>
        </section>
      </article>
    </main>
  );
}
