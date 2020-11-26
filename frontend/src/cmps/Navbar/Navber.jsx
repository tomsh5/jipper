import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './Navbar.scss'

function _Navbar(props) {
    return (
        <div className='navbar flex space-between align-center'>

            <h2><NavLink activeClassName='active-path' to="/" exact > <i className="fab fa-angellist"></i> Jipper</NavLink></h2>
            <ul className="flex"> 
                <li><NavLink activeClassName='active-path' to="/" exact >Home</NavLink></li>
                <li><NavLink to="/product" exact >Collection</NavLink></li>
                <li><NavLink to="/about" exact >Our Story</NavLink></li>
                {/* <li><NavLink to="/product/edit" exact >Add-Product</NavLink></li> */}
                <li><NavLink to="/cart" exact ><i className="fas fa-shopping-cart"></i></NavLink></li>
            </ul>

        </div>
    )
}
export const Navbar = withRouter(_Navbar)