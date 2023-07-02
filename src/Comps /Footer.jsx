import React from "react"
import "./Footer.css"

function Footer() {
    return (
       <div className = "main-footer">
        <div className = "container">
            <div className=" row">
                {/* col1 */}
                <div className="col"> 
                <h4>RUDZKO PRESENT INC</h4>
                <ul className="list-unstyled " > 
                <li> 04-359</li>
                <li>Warsaw,Poland </li>
                54,Kobielska Street                    
                </ul>

                </div>

            </div>
            <hr />
<div className="row">
    <p className="col-sm">
        &copy;{new Date().getFullYear()} Rudzko PRESENT INC | ALL RIGHT RESERVED
        </p> 

</div>

        </div>



       </div>
    )
}
export default Footer