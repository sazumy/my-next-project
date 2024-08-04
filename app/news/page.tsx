import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";

const Page = async () => {
  const { contents: news } = await getNewsList();

  return <NewsList news={news} />;
};

export default Page;
