import Footer from "../components/navigations/Footer";

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center">
      {children}
      <Footer />
    </div>
  );
}
