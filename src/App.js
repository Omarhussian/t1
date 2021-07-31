import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Singers from './pages/Singers';
import Albums from './pages/Albums';
import Songs from './pages/Songs'
import  Header  from './components/Header';

function App() {
  
  
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
      <Switch>
        <Route path="/" component={Singers} exact/>    
        <Route path="/albums" component={Albums} />    
        <Route path="/songs" component={Songs} />
      
      </Switch>
        
        
        
        
    </div>
    </BrowserRouter>
  );
}

export default App;
