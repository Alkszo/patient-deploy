import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Navbar from './Navbar';
import DownMenu from './DownMenu';
import Home from './Home';
import Support from './Support';
import Team from './Team';
import Recommendations from './Recomendations';
import GetInvolved from './GetInvolved';
import Taxonomy from './Taxonomy';
import ZeroCovid from './ZeroCovid';
import JakaPolske from './JakaPolske';
import Manifesto from './Manifesto';
import Booklet from './Booklet';


function App() {

  return (
    <>
    <Navbar />
    <Switch>     
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/supporters'>
        <Support />
      </Route>
      <Route path='/team'>
        <Team />
      </Route>
      <Route path='/recommendations'>
        <Recommendations />
      </Route>
      <Route path='/involvement'>
        <GetInvolved />
      </Route>
      <Route path="/taxonomy">
        <Taxonomy />
      </Route>
      <Route path='/zero-covid-instrument-proposal'>
        <ZeroCovid />
      </Route>
      <Route path='/jaka-polske-chcemy-odbudowac'>
        <JakaPolske />
      </Route>
      <Route path='/manifesto'>
        <Manifesto />
      </Route>
      <Route path='/conference'>
        <Booklet />
      </Route>
    </Switch>
    <DownMenu />
    </>
   
  );
}

export default App;
