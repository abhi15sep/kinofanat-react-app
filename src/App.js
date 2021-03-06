import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/NavbarApp';
import MovieDetail from './components/movieInfo/MovieDetail';
import { MovieProvider } from './components/context/MovieContext';
import NotFound from './components/pages/NotFound';
import Screenshots from './components/movieInfo/Screenshots';
import Cast from './components/movieInfo/Cast';
import Reviews from './components/movieInfo/Reviews';
import Person from './components/personInfo/Person';
import Similar from './components/movieInfo/Similar';
import { ToastProvider } from 'react-toast-notifications';
import Results from './components/pages/Results';

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <ToastProvider placement='bottom-left'>
          <Navbar />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/search' component={Results} />
              <Route exact path='/movie/:id' component={MovieDetail} />
              <Route path='/movie/:id/screenshots' component={Screenshots} />
              <Route path='/movie/:id/cast' component={Cast} />
              <Route path='/movie/:id/reviews' component={Reviews} />
              <Route path='/movie/:id/similar' component={Similar} />
              <Route path='/person/:id' component={Person} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </ToastProvider>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
