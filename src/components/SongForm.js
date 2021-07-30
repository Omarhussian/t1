import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

 
 export default function SongsForm  () {
     return (
         <div>
             <DataGrid
                 rowHeight={200}
                 style={{
                     width: '100%',
                     height: '100%'
                 }}
             >
                 <DataGrid.Column
                    label="Title"
                    dataKey="title"
                    
                 />
                 <DataGrid.Column
                    label="Artist"
                    dataKey="artist"
                    
                 />
             </DataGrid>
         </div>
     );
 }
