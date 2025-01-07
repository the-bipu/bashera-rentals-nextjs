import type { Component } from 'solid-js';
import { Route, Router } from '@solidjs/router';

import Home from './pages/Home';
import Property from './pages/Property';
import NotFound from './pages/_404';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/property" component={Property} />
      <Route path="/*" component={NotFound} />
    </Router>
  );
};

export default App;