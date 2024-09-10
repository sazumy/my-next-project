import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

export const metadata = { title: "お問い合わせ" };

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Hero title="Contact" sub="お問い合わせ" />
      <Sheet>{children}</Sheet>;
    </>
  );
};

export default RootLayout;
