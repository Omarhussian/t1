import img11 from '../assets/afterhours.png';
import img12 from '../assets/thewall.jpg';
import img13 from '../assets/wipedout.jpg';
import img14 from '../assets/coldplayalbum.jpg';
import React from 'react'
import AlbumCard from '../components/Album'
import { Grid } from '@material-ui/core';


export default function Albums() {
    return (
        <div>
        <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        >
            <AlbumCard 
                title="After Hours"
                artist="The Weeknd"
                image={img11}

            />
            <AlbumCard 
                title="The Wall"
                artist="Pink Floyed"
                image={img12}


            />
            <AlbumCard 
                title="Wiped Out"
                artist="The Neighborhood"
                image={img13}

            />
            <AlbumCard 
                title="ParaChutes"
                artist="Coldplay"
                image={img14}
            />
            </Grid>
        </div>
    )
}
