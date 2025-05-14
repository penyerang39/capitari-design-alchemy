
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";

const Index = () => {
  // Use the scroll reveal hook
  useRevealOnScroll();

  useEffect(() => {
    // Set page title
    document.title = "Capitari | UX Design & Development Agency";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
