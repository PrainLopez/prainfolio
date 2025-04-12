export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main id="resume" className="flex-grow">
        {children}
      </main>
      <footer id="footer" className="sections-yframe h-[70px]">
        <section className="sections-xframe"></section>
      </footer>
    </>
  );
}
