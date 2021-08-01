import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: '#', width: 90 },
  {
    field: 'Songname ',
    headerName: 'Songname',
    width: 150,
    
  },
  {
    field: 'Artist',
    headerName: 'Artist',
    width: 150,
    
  },
  {
    field: 'Year',
    headerName: 'Year',
    type: 'number',
    width: 110,
    
  },
  {
    field: 'Album',
    headerName: 'Album',
    description: '',
    
    width: 160,
    
  },
];

const rows = [
  { id: 1, Songname: 'Heartless', Artist: 'The Weeknd', Year: 2017, Album: 'After hours' },
  { id: 2, Songname: 'Magic', Artist: 'Coldplay', Year: 2010 , Album: 'Magic'},
  { id: 3, Songname: 'Afterhours', Artist: 'the weeknd', Year: 2019, Album: 'After hours' },
  { id: 4, Songname: 'Compass', Artist: 'The neighborhood', Year: 2018 , Album: 'Nervous'},
  { id: 5, Songname: 'Best Take one', Artist: 'The neighborhood', Year: 2018 , Album: 'Nervous '},
  { id: 6, Songname: 'Blinding Lights', Artist: "the weeknd", Year: 2018, Album: 'After hours' },
  { id: 7, Songname: 'Clifford', Artist: 'Ferrara', Year: 2010 , Album: 'After hours'},
  { id: 8, Songname: 'Frances', Artist: 'Rossini', Year: 2017, Album: 'After hours' },
  { id: 9, Songname: 'Roxie', Artist: 'Harvey', Year: 2018 , Album: 'After hours'},
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%'  }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}