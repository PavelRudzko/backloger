import React from "react"
import {NavLink,Link} from "react-router-dom"

import { useState } from "react"

function Header() {
    return (
        
        
        <div> 
           
            <h1>This is a BackLogger </h1>
            <button> Add new idea  </button>
            {/* <header className="navbar">This is a header 
            <button>new button </button>
            </header>
            <button>new button super </button> */}
            

                {/* <NavLink href="">Welcome</NavLink>
                <NavLink href="">Insights</NavLink>
                <NavLink href="">Dashboard</NavLink> */}
       
        </div>
    )
}
export default Header