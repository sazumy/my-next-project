import styles from "./page.module.css";

const Home = () => {
  const name = "世界";
  return (
    <div>
      <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
      <p className={styles.description}>
        私たちは市場をリードしているグローバルテックカンパニーです
      </p>
    </div>
  );
};

export default Home;
