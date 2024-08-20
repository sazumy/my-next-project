import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "@/app/_components/NewsList";

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: news } = await getNewsList({
    filters: `category[equals]${category.id}`,
  });

  return <NewsList news={news} />;
};

export default Page;
