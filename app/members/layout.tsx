import Sheet from "@/app/_components/Sheet";

type Props = {
  children: React.ReactNode;
};

export const RootLayout = ({ children }: Props) => {
  return <Sheet>{children}</Sheet>;
};

export default RootLayout;
