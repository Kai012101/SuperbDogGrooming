import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import PriceList from './pages/PriceList';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { Page } from './types';

// Schema Markup for LocalBusiness
const SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Superb Dog Grooming",
  "image": "https://superbdoggrooming.com.au/logo.png",
  "telephone": "0406 298 111",
  "email": "info@superbdoggrooming.com.au",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "455 Wellington Rd",
    "addressLocality": "Wheelers Hill",
    "addressRegion": "VIC",
    "postalCode": "3150",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -37.919016,
    "longitude": 145.186649
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  },
  "priceRange": "$$"
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    // Simple title update
    const titles: Record<Page, string> = {
      home: 'Home | Superb Dog Grooming Wheelers Hill',
      services: 'Services | Gentle Dog Grooming',
      'price-list': 'Price List | Superb Dog Grooming',
      reviews: 'Reviews | Happy Pets in Wheelers Hill',
      gallery: 'Gallery | Cute Dogs & Cats',
      contact: 'Contact Us | Book Appointment'
    };
    document.title = titles[currentPage] || 'Superb Dog Grooming';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services />;
      case 'price-list':
        return <PriceList />;
      case 'reviews':
        return <Reviews />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      {/* Inject Schema */}
      <script type="application/ld+json">
        {JSON.stringify(SCHEMA_DATA)}
      </script>
      
      <Layout activePage={currentPage} onNavigate={setCurrentPage}>
        {renderPage()}
      </Layout>
    </>
  );
}

export default App;
