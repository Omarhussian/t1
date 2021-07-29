import img11 from '../assets/afterhours';
import img12 from '../assets/thewall';
import img13 from '../assets/wipedout';
import img14 from '../assets/coldplayalbum';
import React from 'react'
import AlbumCard from '../components/Album'


export default function Albums() {
    return (
        <div>
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
        </div>
    )
}
