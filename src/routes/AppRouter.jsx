import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { Home } from '../pages/Home';
import { AboutUs } from '../pages/AboutUs';
import { Patent } from '../pages/Patent';
import { Trademark } from '../pages/Trademark';
import { IndustrialDesign } from '../pages/IndustrialDesign';
import { Copyright } from '../pages/Copyright';
import { GeographicalIndication } from '../pages/GeographicalIndication';
import { PlantProtection } from '../pages/PlantProtection';
import { Training } from '../pages/Training';
import { Helpline } from '../pages/Helpline';
import { Career } from '../pages/Career';
import { ContactUs } from '../pages/ContactUs';
import { Disclaimer } from '../pages/Disclaimer';
import { Privacy } from '../pages/Privacy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'services/patent', element: <Patent /> },
      { path: 'services/trademark', element: <Trademark /> },
      { path: 'services/industrial-design', element: <IndustrialDesign /> },
      { path: 'services/copyright', element: <Copyright /> },
      { path: 'services/geographical-indication', element: <GeographicalIndication /> },
      { path: 'services/plant-protection', element: <PlantProtection /> },
      { path: 'training', element: <Training /> },
      { path: 'helpline', element: <Helpline /> },
      { path: 'career', element: <Career /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'disclaimer', element: <Disclaimer /> },
      { path: 'privacy', element: <Privacy /> },
      { path: '*', element: <Home /> } // Fallback
    ]
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
