import { useNavigate } from 'react-router-dom';
import './navbar.css'

export default function Navbar({name}) {

    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('fullName');
        navigate('/');
    }

    return(
        <div className="navbar">
            <div className="navbar__right-section">
                <div>Welcome, <span>{name}</span></div>
                <div className="navbar__right-section__button-div">
                    <button className="navbar__right-section__button" onClick={handleSignOut}>Sign out</button>
                </div>
            </div>
        </div>
    )
}