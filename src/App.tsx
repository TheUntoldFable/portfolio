import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Approach } from './components/Approach';
import { Toolkit } from './components/Toolkit';
import { Contact } from './components/Contact';
import { usePortfolioMotion } from './hooks/usePortfolioMotion';

function App() {
  const scrolled = usePortfolioMotion();

  return (
    <main className="portfolio-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <Nav scrolled={scrolled} />
      <Hero />
      <About />
      <Experience />
      <Approach />
      <Toolkit />
      <Contact />
    </main>
  );
}

export default App;
