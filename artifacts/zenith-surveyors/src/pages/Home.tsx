import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}
