import Hero from './_components/hero';

export default function Home() {
  return (
    <main className='min-h-[calc(100vh-72px)] py-12'>
      <section
        id='hero'
        className='container mx-auto w-full'
      >
        <Hero />
      </section>
    </main>
  );
}
