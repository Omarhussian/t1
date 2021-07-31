import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Singers from './pages/Singers';
import Albums from './pages/Albums';
import Next from './components/NextButton';
import Back from './components/BackButton';
import Songs from './pages/Songs'


function App() {
  
  
  return (
    <BrowserRouter>
    <div className="App">
        
      <Switch>
        <Route path="/" component={Singers} exact/>    
        <Route path="/albums" component={Albums} />    
        <Route path="/songs" component={Songs} />
      
      </Switch>
        <Back />
        <Next />
        
        
        
    </div>
    </BrowserRouter>
  );
}

export default App;
