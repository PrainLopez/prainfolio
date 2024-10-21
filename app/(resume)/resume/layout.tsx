import styles from "./resume.module.css";

function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <footer id="footer" className="sections-yframe border-y">
        <section className="sections-xframe h-[68px]"></section>
      </footer>
    </>
  );
}

export default ResumeLayout;
