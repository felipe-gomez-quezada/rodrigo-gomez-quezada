import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { MisionGrado } from "@/components/mision-grado";
import { Testimonials } from "@/components/testimonials";
import { ContactScheduling } from "@/components/contact-scheduling";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <MisionGrado />
        <Testimonials />
        <ContactScheduling />
      </main>
      <Footer />
    </>
  );
}
