import React from "react"
import {NavLink,Link} from "react-router-dom"



function leftLayout() {
    return (
        <div className="baseMenu">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
    )
}