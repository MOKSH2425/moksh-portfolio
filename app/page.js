import Navbar    from '@/components/Navbar/Navbar';
import Hero      from '@/components/Hero/Hero';
import About     from '@/components/About/About';
import Skills    from '@/components/Skills/Skills';
import Projects  from '@/components/Projects/Projects';
import Education from '@/components/Education/Education';
import Contact   from '@/components/Contact/Contact';
import Footer    from '@/components/Footer/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
