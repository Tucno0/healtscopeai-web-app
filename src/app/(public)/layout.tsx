import { Header } from '@/components/public/navbar/header';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-[#f4f4f0] dark:bg-[#111111] overflow-hidden">
        {children}
      </main>
    </div>
  );
}
