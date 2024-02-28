import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import './main.css'
import axios from 'axios'

export default function Main() {
    axios.defaults.withCredentials = true;
    return(
        <div className="main">
            <Navbar />
            <Sidebar />
        </div>
    )
}