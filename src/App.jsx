import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { AppRouter } from './routes/AppRouter';
import './styles/global.css';

function App() {
  return (
     <ThemeProvider>
      <AppRouter />
     </ThemeProvider>
  );
}

export default App;
