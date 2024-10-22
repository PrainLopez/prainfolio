export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="sections-yframe flex-grow">
        <section className="sections-xframe">{children}</section>
      </main>
      <footer id="footer" className="sections-yframe h-[70px]">
        <section className="sections-xframe"></section>
      </footer>
    </>
  );
}
