import React, { useState, useEffect } from 'react';
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


function App() {
  const [pdfOpen, setPdfOpen] = useState(false)

  /*
  useEffect(() => {
    setPdfOpen(false)
  });
*/

  return (
    <>
    {!pdfOpen && <Navbar />}
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
        <Recommendations openPdf={setPdfOpen}/>
      </Route>
      <Route path='/involvement'>
        <GetInvolved />
      </Route>
      <Route path="/taxonomy">
        <Taxonomy />
      </Route>
      <Route path='/zero-covid-instrument-proposal'>
        <ZeroCovid openPdf={setPdfOpen}/>
      </Route>
    </Switch>
    {!pdfOpen && <DownMenu />}
    </>
   
  );
}

export default App;
