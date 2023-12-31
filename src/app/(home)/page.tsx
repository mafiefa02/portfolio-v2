import About from "./_components/about";
import Contact from "./_components/contact";
import Hero from "./_components/hero";
import Works from "./_components/works";

export default function Home() {
  return (
    <main className="space-y-28 py-12">
      <section id="hero" className="container mx-auto w-full">
        <Hero />
      </section>

      <section
        id="about"
        className="w-full from-background via-indigo-800/40 to-background py-4 dark:bg-gradient-to-b"
      >
        <About />
      </section>

      <section id="works" className="w-full py-4">
        <Works />
      </section>

      <section id="contact" className="w-full pb-16 pt-4 lg:pb-28">
        <Contact />
      </section>
    </main>
  );
}
