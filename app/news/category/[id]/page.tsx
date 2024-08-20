import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { contents: news } = await getNewsList({
    filters: `category[equals]${params.id}`,
  });

  return <NewsList news={news} />;
};

export default Page;
