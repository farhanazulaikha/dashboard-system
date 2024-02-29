import './sidebar.css'

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar__element">
                <div className="sidebar__element-input-div">
                    <input type="text" placeholder="Filter 1" className="sidebar__element-input"></input>
                </div>
                <div className="sidebar__element-input-div">
                    <input type="text" placeholder="Filter 2" className="sidebar__element-input"></input>
                </div>
                <div className="sidebar__element-button-div">
                    <button className="sidebar__element-button">Apply</button>
                </div>
            </div>
        </div>
    )
}