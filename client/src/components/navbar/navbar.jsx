import './navbar.css'
import { useState } from 'react'

export default function Navbar() {

    const [signedIn, isSignedIn] = useState(false);

    return(
        <div className="navbar">
            <div className="left-section">
                Dashboard System
            </div>
            { signedIn ?
                <div className="right-section">
                </div>
                : 
                ''
            }
        </div>
    )
}