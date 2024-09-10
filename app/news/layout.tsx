import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

export const metadata = { title: "ニュース" };

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

const NewsLayout = ({ children }: Props) => {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
};

export default NewsLayout;
