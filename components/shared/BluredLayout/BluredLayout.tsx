import styles from "./BluredLayout.module.css";

interface BluredLayoutProps {
  children: React.ReactNode;
}

const BluredLayout: React.FC<BluredLayoutProps> = ({ children }) => {
  return (
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>{children}</div>
    </div>
  );
};

export default BluredLayout;
