import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <div className="header">

            <div className="innerheader">
                <div className="logo_container">
                    <h1>Songs<span>Seller</span></h1>

                </div>
                <ul className="nav">
                    <div className="links">
                        
                    <Link className="links_li" to="/">1</Link>
                    <Link className="links_li" to="/Albums">2</Link>
                    <Link  className="links_li"to="/Songs">3</Link>
                        
                    </div>         
                </ul>
            </div>

        </div>
     );
}
 
export default Header;