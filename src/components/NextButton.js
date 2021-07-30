import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Next = () => {
    return ( 
        <Link to="/albums">
        <Button  
          
        variant="contained" 
        color="primary" 
        size="large"
        className="next-button"
        >
            Next
        </Button>
        </Link>
    );
}
 
export default Next;