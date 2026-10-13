import { About } from "@/components/About";
import { Accreditations } from "@/components/Accreditations";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Instagram } from "@/components/Instagram";
import { LeadProvider } from "@/components/LeadProvider";
import { Process } from "@/components/Process";
import { Quote } from "@/components/Quote";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <LeadProvider>
      <main id="main">
        <Hero />
        <Clients />
        <About />
        <Services />
        <Work />
        <Process />
        <Accreditations />
        <Faq />
        <Quote />
        <Instagram />
        <Contact />
      </main>
    </LeadProvider>
  );
}
