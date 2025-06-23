import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '관리자 페이지 | socon',
  description: '소콘 스튜디오 관리자 페이지',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-[#EBECED]">{children}</div>;
}
