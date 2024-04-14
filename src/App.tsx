import { FunctionComponent } from 'react';

import './style/typography.css';

import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className="container main"></main>
      <Footer />
    </>
  );
};

export default App;
