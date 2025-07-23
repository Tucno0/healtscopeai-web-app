import { Header } from '@/components/public/navbar/header';
import { Footer } from '@/components/public/footer';
import { ChatWidget } from '@/modules/chatbot/ui/components/chat-widget';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 overflow-hidden">{children}</main>
      
      <Footer />
      <ChatWidget />
      <WhatsAppButton />
    </div>
  );
}
