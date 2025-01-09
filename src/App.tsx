import type { Component } from 'solid-js';
import { Route, Router } from '@solidjs/router';

import Home from './pages/Home';
import Property from './pages/Property';
import NotFound from './pages/_404';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/property" component={Property} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/*" component={NotFound} />
    </Router>
  );
};

export default App;