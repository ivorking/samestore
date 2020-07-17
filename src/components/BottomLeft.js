import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

const BottomLeft = props => (
    <div className = 'bottom-0 fixed w-25 h-25 inline-flex items-center justify-center bottom-0-l left-0 bg-yellow'>
        <ul>
            <li className='list p10 pa3'>
                <NavLink exact to='/' className = 'nav-link link black f6 ttu gray'>Home</NavLink>
            </li>
            <li className='list p10 pa3'>
                <NavLink to='/about' className = 'nav-link link black f6 ttu gray'>About</NavLink>
            </li>
            <li className='list p10 pa3'>
                <NavLink to='/data' className = 'nav-link link black f6 ttu gray'>Data</NavLink>
            </li>
        </ul>
    </div>
)

export default BottomLeft;