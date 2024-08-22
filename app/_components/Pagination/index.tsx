import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";
import styles from "./index.module.css";
import { Span } from "next/dist/trace";

type Props = {
  totalCount: number;
  current?: number;
};

export const Pagination = ({ totalCount, current = 1 }: Props) => {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );
  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((page) => (
          <li key={page} className={styles.list}>
            {current !== page ? (
              <Link href={`/news/p/${page}`} className={styles.item}>
                {page}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{page}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
