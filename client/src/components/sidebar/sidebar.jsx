import { useState} from 'react'
import React from 'react';
import './sidebar.css'

export default function Sidebar({handleApply, filter, handleFilter}) {

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
                <div className="sidebar__element-input-div">
                    <input type="text" placeholder="Filter 3" className="sidebar__element-input" 
                    value={filter["filterThree"]} onChange={handleFilter} name="filterThree"></input>
                </div>
                <div className="sidebar__element-input-div">
                    <input type="text" placeholder="Filter 4" className="sidebar__element-input" 
                    value={filter["filterFour"]} onChange={handleFilter} name="filterFour"></input>
                </div>
                <div className="sidebar__element-button-div">
                    <button className="sidebar__element-button" type="submit" onClick={handleApply}>Apply</button>
                </div>
            </div>
        </div>
    )
}