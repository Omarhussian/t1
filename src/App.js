import img from './assets/theweeknd.png'
import img2 from './assets/coldplay.png'
import img3 from './assets/theneighbor.png'
import img4 from './assets/pinkfloyed.png'
import React from 'react'
import './App.css';
import SingerCard from './components/Card.js';
import Grid from '@material-ui/core/Grid';
import Next from './components/NextButton';
import Back from './components/BackButton';
function App() {
  
  
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
         image={img4}

        />
        <SingerCard
          title="Coldplay"
          genere="Rock"
          image={img2}
        />
        <SingerCard
          title="The Neighborhood"
          genere="Rock"
          image ={img3}
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
