import Footer from '@/components/navigations/Footer';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-[#EBECED]">
      {children}
      <Footer />
    </main>
  );
}
