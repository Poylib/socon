import Footer from "../components/navigations/Footer";

export default function layout({ children }) {
  return (
    <main className="flex flex-col items-center justify-between md:min-h-screen bg-[#EBECED]">
      {children}
      <Footer />
    </main>
  );
}
