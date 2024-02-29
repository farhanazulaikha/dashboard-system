import './navbar.css'

export default function Navbar({name}) {
    return(
        <div className="navbar">
            <div className="navbar__right-section">
                <div>Welcome, <span>{name}</span></div>
                <div className="navbar__right-section__button-div">
                    <button className="navbar__right-section__button">Sign out</button>
                </div>
            </div>
        </div>
    )
}