import './tabular-data.css'
import { useState } from 'react';
import moment from 'moment';
import ReactPaginate from 'react-paginate';

export default function TabularData({peopleList, totalPages, recordsPerPage}) {
    const titles = ["Full Name", "Age", "Username", "Email", "Country", "Job Title", "Employment Date"];
    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const subset = peopleList.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return(
        <div className="tabular-data">
            <div className="tabular-data__title">Data list</div>
            {peopleList.length > 0 ?
                <div>
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
                        activeClassName={"active"}
                        breakClassName={"break"}        
                    />  
                </div>
                : <div>No records can be found!</div>
            }      
    </div>
    )
}