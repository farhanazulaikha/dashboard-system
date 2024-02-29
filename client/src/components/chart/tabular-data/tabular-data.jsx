import './tabular-data.css'

export default function TabularData() {
    const titles = ["Full Name", "Age", "Username", "Email", "Country", "Job Title", "Employment Date"];

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
                    <tr>
                        <td>
                            nana
                        </td>
                        <td>
                            25
                        </td>
                        <td>
                            nana99
                        </td>
                        <td>
                            nana99@gmail.com
                        </td>
                        <td>
                            malaysia
                        </td>
                        <td>
                            developer
                        </td>
                        <td>
                            2019-03-01
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}