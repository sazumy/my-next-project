import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";

//NOTE: キャッシュの保持時間を0秒に設定
export const revalidate = 0;

const Page = async () => {
  const { contents: news, totalCount } = await getNewsList();

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
};

export default Page;
