import React from 'react';
import Card from '@material-ui/core/Card';
import { CardHeader, CardMedia,  Checkbox  } from '@material-ui/core';


const AlbumCard = () => {
    return (    
        <div className="album-card">
        
         <Card className="card" >
         <CardMedia
            square 
            height="250"
            width="250"
            className="media-css"
            component="img"
            image = {props.image}
            
             />
            <CardHeader
            action={
                <Checkbox aria-label="settings">

                </Checkbox>}

                title={props.title}
                subheader={props.artist}
            />
            
         </Card>
        </div>
      );
}
 
export default AlbumCard;