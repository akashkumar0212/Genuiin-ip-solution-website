import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FeedbackWidget } from '../components/FeedbackWidget';

export const RootLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: '1 0 auto', paddingTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
      <FeedbackWidget />
    </div>
  );
};
export default RootLayout;
