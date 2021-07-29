import img from '../assets/theweeknd.png'
import img2 from '../assets/coldplay.png'
import img3 from '../assets/theneighbor.png'
import img4 from '../assets/pinkfloyd.jpeg'
import React from 'react';
import SingerCard from '../components/Card';
import Grid from '@material-ui/core/Grid';




export default function Singers() {
    return (
        <div>
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
             
                 
             
            
           </Grid>
        </div>
    )
}
