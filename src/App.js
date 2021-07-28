import React from 'react'
import './App.css';
import SingerCard from './components/Card.js';
import Grid from '@material-ui/core/Grid';
import Next from './components/NextButton';
import Back from './components/BackButton';

function App() {
  const img = require ('./assets/theweeknd.png');
  return (
    <div className="App">
       <Grid
   container
   direction="row"
   justifyContent="space-evenly"
   alignItems="center"
       >
        <SingerCard
          title="The Weeknd"
          genere="hiphop"
          image= {img}
        />
        <SingerCard
          title="PinkFloyed"
          genere="Rock"
         image={img}

        />
        <SingerCard
          title="Coldplay"
          genere="Rock"
          image={require("./assets/coldplay.png")}
        />
        <SingerCard
          title="The Neighborhood"
          genere="Rock"
          image ={require("./assets/coldplay.png")}
        />
        <Grid item xs={6}  >
             <Back   />
        </Grid>
        <Grid item xs={6}  >
             <Next  />
        </Grid>
            
        
       
      </Grid>
     
    </div>
  );
}

export default App;
