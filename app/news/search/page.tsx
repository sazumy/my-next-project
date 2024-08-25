import { notFound } from "next/navigation";
import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import SearchField from "@/app/_components/SearchField";

type Props = {
  searchParams: {
    q?: string;
  };
};

const Page = async ({ searchParams }: Props) => {
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q,
  });

  if (news.length === 0) {
    return notFound();
  }

  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  );
};

export default Page;
