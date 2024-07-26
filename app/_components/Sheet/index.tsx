import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export const Sheet = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default Sheet;
