import './tabular-data.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactPaginate from 'react-paginate';
const BASE_URL = "http://localhost:5000/person";

export default function TabularData() {
    const titles = ["Full Name", "Age", "Username", "Email", "Country", "Job Title", "Employment Date"];
    const [peopleList, setPeopleList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [recordsPerPage] = useState(7);

    const startIndex = currentPage * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const subset = peopleList.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    useEffect(() => {
        axios.get(`${BASE_URL}/people-list`)
        .then(result => {
            if(result.data) {
                setPeopleList(result.data);
            }
            setTotalPages(Math.ceil(result.data.length / recordsPerPage))
        })
    }, []);

    return(
        <div className="tabular-data">
            <div className="tabular-data__title">Data list</div>
            <table>
                <thead>
                    <tr>
                        {titles.map((title, index) => (
                            <th key={index}>
                                { title }
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {subset.map(person => (
                        <tr key={person._id}>
                                <td>
                                    { person.name.first } { person.name.middle } { person.name.last } 
                                </td>
                                <td>
                                    { person.age }
                                </td>
                                <td>
                                    { person.username }
                                </td>
                                <td>
                                    { person.email }
                                </td>
                                <td>
                                    { person.country }
                                </td>
                                <td>
                                    { person.jobTitle }
                                </td>
                                <td>
                                    { moment(person.employmentDate).format('DD-MM-YYYY') }
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageChange}
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."} 
                containerClassName={"pagination"}
                pageLinkClassName={"page-num"}
                previousLinkClassName={"page-num"}
                nextLinkClassName={"page-num"}
                activeClassName={"active-page"}             
            />        
    </div>
    )
}