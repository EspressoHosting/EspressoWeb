import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Plans } from './components/Plans';
import { Features } from './components/Features';
import { Founders } from './components/Founders';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-dark-100 text-white">
      <CustomCursor />
      <div className="fixed inset-0 bg-gradient-radial from-brown-600/10 via-transparent to-transparent pointer-events-none" />
      <Header />
      <main>
        <Hero />
        <Plans />
        <Features />
        <Founders />
      </main>
      <Footer />
    </div>
  );
}

export default App;