import PChart from '../chart/pie-chart/pie-chart';
import TabularData from '../chart/tabular-data/tabular-data';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import './main.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
const USER_URL = "http://localhost:5000/user";
const PEOPLE_URL = "http://localhost:5000/person";

export default function Main() {

    const [name, setName] = useState("");
    const [peopleList, setPeopleList] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [recordsPerPage] = useState(7);

    axios.defaults.withCredentials = true;

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${USER_URL}/main/${id}`)
        .then(result => {
            if(result.data.message !== "Success") {
                navigate('/')
            }
            else {
                setName(result.data.fullName);
            }
        })
    }, []);

    useEffect(() => {
        axios.get(`${PEOPLE_URL}/people-list`)
        .then(result => {
            if(result.data) {
                setPeopleList(result.data);
            }
            setTotalPages(Math.ceil(result.data.length / recordsPerPage))
        })
    }, []);

    return(
        <div className="main">
            <Navbar name={name} />
            <Sidebar />
            <div className="visual-charts">
                <div><PChart /></div>
                <div>hi</div>
            </div>
            <div>
                {/* <TabularData peopleList={peopleList} totalPages={totalPages} recordsPerPage={recordsPerPage}/> */}
            </div>
        </div>
    )
}