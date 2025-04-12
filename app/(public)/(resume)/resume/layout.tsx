export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <main id="resume" className="">
        {children}
      </main>
      <footer id="footer" className="sections-yframe grow">
        <section className="sections-xframe grow"></section>
      </footer>
    </div>
  );
}
