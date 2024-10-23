export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main id="resume" className="sections-yframe flex-grow">
        {children}
      </main>
      <footer id="footer" className="sections-yframe h-[70px]">
        <section className="sections-xframe"></section>
      </footer>
    </>
  );
}
