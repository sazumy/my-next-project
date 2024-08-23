import Image from "next/image";
import styles from "./index.module.css";

export const SearchField = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="" className={styles.search}>
        <Image src="/search.svg" alt="検索" width={16} height={16} />
        <input
          type="text"
          name="q"
          placeholder="キーワードを検索"
          className={styles.searchInput}
        />
      </label>
    </form>
  );
};

export default SearchField;
