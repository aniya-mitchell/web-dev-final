import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='nav-bar'>
            <div className='nav-functions'>
                <div className='nav-item' style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    Stichify
                </div>
                <Link to={'/'}>
                </Link>
                <Link to={'/'}>
                    <div className='nav-item'>
                        Home
                    </div>
                </Link>
                <Link to={'/feed'}>
                    <div className='nav-item'>
                        Feed
                    </div>
                </Link>
                <Link to={'/create-post'}>
                    <div className='nav-item'>
                        Create a Post
                    </div>
                </Link>
                
            </div>
            <div className='nav-config'>
                <div className='nav-item'>

                </div>
            </div>


        </div>
    )
}
export default Navbar;
