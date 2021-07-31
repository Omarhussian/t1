import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Back = () => {
    return ( 
      <div className = 'BackButton'> 
        <Link to="/">
         <Button 
         Link = "/" 
         variant="contained" 
         color="Secondary" 
         size="large"
        className="next-button"
         >
           Back
           
          </Button>
        </Link>
        </div>
    );
}
 
export default Back;