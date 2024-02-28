import './navbar.css'

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar__right-section">
                <div>Welcome, xxx</div>
                <div className="navbar__right-section__button-div">
                    <button className="navbar__right-section__button">Sign out</button>
                </div>
            </div>
        </div>
    )
}