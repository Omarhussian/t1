import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Singers from './pages/Singers';
import Albums from './pages/Albums';
import Songs from './pages/Songs'
import  Header  from './components/Header';
import SubmitForm from './pages/SubmitForm';
import NotFound from './pages/NotFound';
function App() {
  
  
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
      <Switch>
        <Route path="/" component={Singers} exact/>    
        <Route path="/albums" component={Albums} />    
        <Route path="/songs" component={Songs} />
        <Route path="/submitform" component={SubmitForm} />
        <Route path="*" component={NotFound} />
      </Switch>
        
        
        
        
    </div>
    </BrowserRouter>
  );
}

export default App;
