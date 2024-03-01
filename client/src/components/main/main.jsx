import LChart from '../chart/line-chart/line-chart';
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

    const [ageRangeCount, setAgeRangeCount] = useState([
        {idx : 0, name: "20 - 30 years old", count: 0, fill: '#7CB9E8'},
        {idx : 1, name: "31 - 40  years old", count: 0, fill: '#72A0C1'},
        {idx : 2, name: "41 - 50  years old", count: 0, fill: '#0066b2'},
        {idx : 3, name: "51 - 60  years old", count: 0,  fill: '#00308F'},
    ]);

    const [employmentByYearCount, setEmploymentByYearCount] = useState([
        {idx : 0, name: "2019", count: 0, fill: '#7CB9E8'},
        {idx : 1, name: "2020", count: 0, fill: '#72A0C1'},
        {idx : 2, name: "2021", count: 0, fill: '#0066b2'},
        {idx : 3, name: "2022", count: 0,  fill: '#00308F'},
        {idx : 4, name: "2023", count: 0,  fill: '#00308F'},
    ]);

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

    
    useEffect(() => {
        axios.get(`${PEOPLE_URL}/age-range-list`)
        .then(result => {
            let res = result.data;
            if(res) {
                getAgeRangeCount(res);
            }
        })
    }, []);

    useEffect(() => {
        axios.get(`${PEOPLE_URL}/employment-by-year-list`)
        .then(result => {
            let res = result.data;
            if(res) {
                getEmploymentByYearCount(res);
            }
        })
    }, []);

    const getAgeRangeCount = (res) => {
        setAgeRangeCount(ageRangeCount.map((ageRange, index) => {
            if(ageRange.idx === index) {
                return {...ageRange, count: res[index].count}
            }
        }))
    }

    const getEmploymentByYearCount = (res) => {
        setEmploymentByYearCount(employmentByYearCount.map((employmentByYear, index) => {
            if(employmentByYear.idx === index) {
                return {...employmentByYear, count: res[index].count}
            }
        }))
    }


    return(
        <div className="main">
            <Navbar name={name} />
            <Sidebar />
            <div className="visual-charts">
                <div className="visual-charts__pie"><PChart ageRangeCount={ageRangeCount}>Total of people by age group</PChart></div>
                <div className="visual-charts__bar"><LChart employmentByYearCount={employmentByYearCount}>Total of people employed by year (2019 - 2023)</LChart></div>
            </div>
            <div>
                {/* <TabularData peopleList={peopleList} totalPages={totalPages} recordsPerPage={recordsPerPage}/> */}
            </div>
        </div>
    )
}