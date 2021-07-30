import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Singers from './pages/Singers';
import Albums from './pages/Albums';
import Next from './components/NextButton';
import Back from './components/BackButton';
import SongsForm from './components/SongForm';

function App() {
  
  
  return (
    <BrowserRouter>
    <div className="App">
        
      <Switch>
        <Route path="/" component={Singers} exact/>    
        <Route path="/albums" component={Albums} />    

      
      </Switch>
        <Back />
        <Next />
        <SongsForm />
        
    </div>
    </BrowserRouter>
  );
}

export default App;
