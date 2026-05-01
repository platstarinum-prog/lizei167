import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Family from './pages/family';
import News from './pages/News';
import NewsPost from './pages/NewsPost';
import Reviews from './pages/Reviews';
import Contacts from './pages/Contacts';
import Openup from './pages/openup';

export type Page =
  | 'home'
  | 'about'
  | 'education'
  | 'family'
  | 'news'
  | 'reviews'
  | 'contacts'
  | 'openup';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNewsId, setOpenNewsId] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('invite_token') || hash.includes('recovery_token')) {
      window.location.href = '/admin/#' + hash.split('#')[1];
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, openNewsId]);

  const navigate = (page: Page) => {
    setOpenNewsId(null);
    setCurrentPage(page);
  };

  const openNews = (id: string) => setOpenNewsId(id);
  const closeNews = () => setOpenNewsId(null);

  const renderPage = () => {
    if (openNewsId) {
      return <NewsPost id={openNewsId} onBack={closeNews} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home navigate={navigate} />;
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'family':
        return <Family />;
      case 'news':
        return <News onOpen={openNews} />;
      case 'reviews':
        return <Reviews />;
      case 'contacts':
        return <Contacts />;
      case 'openup':
        return <Openup />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header
        currentPage={currentPage}
        navigate={navigate}
        isScrolled={isScrolled}
      />

      <main>{renderPage()}</main>

      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
