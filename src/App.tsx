import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import News from './pages/News';
import Reviews from './pages/Reviews';
import Contacts from './pages/Contacts';

export type Page = 'home' | 'about' | 'education' | 'news' | 'reviews' | 'contacts';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigate = (page: Page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={navigate} />;
      case 'about': return <About />;
      case 'education': return <Education />;
      case 'news': return <News />;
      case 'reviews': return <Reviews />;
      case 'contacts': return <Contacts />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header currentPage={currentPage} navigate={navigate} isScrolled={isScrolled} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
