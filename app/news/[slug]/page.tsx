import { getNewsDetail } from "@/app/_libs/microcms";

type Props = {
  params: { slug: string };
};

const Page = async ({ params }: Props) => {
  const data = await getNewsDetail(params.slug);

  return <div>{data.title}</div>;
};

export default Page;
