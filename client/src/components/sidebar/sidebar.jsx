import { useState} from 'react'
import React from 'react';
import './sidebar.css'

export default function Sidebar({handleApply, filter, handleFilter}) {

    return(
        <div className="sidebar">
            <div className="sidebar__element">
                <div className="sidebar__element-input-div">
                    <input type="text" placeholder="Filter" className="sidebar__element-input" 
                    value={filter} onChange={handleFilter}></input>
                </div>
                <div className="sidebar__element-button-div">
                    <button className="sidebar__element-button" type="submit" onClick={handleApply}>Apply</button>
                </div>
            </div>
        </div>
    )
}