"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./index.module.css";
import { Suspense } from "react";

const SearchFieldComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const q = event.currentTarget.elements.namedItem("q");

    if (q instanceof HTMLInputElement) {
      const params = new URLSearchParams();
      params.set("q", q.value.trim());
      router.push(`/news/search?${params.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="" className={styles.search}>
        <Image src="/search.svg" alt="検索" width={16} height={16} />
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get("q") ?? undefined}
          placeholder="キーワードを検索"
          className={styles.searchInput}
        />
      </label>
    </form>
  );
};

export const SearchField = () => {
  return (
    <Suspense>
      <SearchFieldComponent />
    </Suspense>
  );
};

export default SearchField;
