import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import './main.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
const BASE_URL = "http://localhost:5000/user";

export default function Main() {

    const [name, setName] = useState("");

    axios.defaults.withCredentials = true;

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${BASE_URL}/main/${id}`)
        .then(result => {
            if(result.data.message !== "Success") {
                navigate('/')
            }
            else {
                setName(result.data.fullName);
            }
        })
    }, [])

    return(
        <div className="main">
            <Navbar name={name} />
            <Sidebar />
        </div>
    )
}