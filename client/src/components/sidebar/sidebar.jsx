import { useState } from 'react'
import React from 'react';
import './sidebar.css'

export default function Sidebar() {

    const [filter, setFilter] = useState({
        filterOne: "",
        filterTwo: ""
    });

    const handleFilter = (e) => {
        const { name, value } = e.target;

        setFilter(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleApply = (e) => {
        e.preventDefault();
        console.log(filter);
    }

    return(
        <div className="sidebar">
            <div className="sidebar__element">
                <div className="sidebar__element-input-div">
                    <input type="text" placeholder="Filter 1" className="sidebar__element-input" 
                    value={filter["filterOne"]} onChange={handleFilter} name="filterOne"></input>
                </div>
                <div className="sidebar__element-input-div">
                    <input type="text" placeholder="Filter 2" className="sidebar__element-input" 
                    value={filter["filterTwo"]} onChange={handleFilter} name="filterTwo"></input>
                </div>
                <div className="sidebar__element-button-div">
                    <button className="sidebar__element-button" type="submit" onClick={handleApply}>Apply</button>
                </div>
            </div>
        </div>
    )
}