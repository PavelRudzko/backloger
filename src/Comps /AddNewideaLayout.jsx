import React from "react";

function AddNewIdea () {
    return (
        <div>
            <div>New idea </div>
            <label>New Idea</label>
            <div><input type="text" placeholder="Input your idea"/></div>
            <label>Description</label>
            <div><input type="text" placeholder="Describe your idea" name="description" id="idDescription" /></div>
            <div><input type="text" name="subTask" /></div>

        <div> <button onClick = " " >Create RoadMap</button></div>
        
        <div> 
            <label for = "Status" > Choose status</label>
            <select name="status"  id="idStatus">
                <option value="Reseach "></option>
                <option value="ToDo"></option>
                <option value="Close Idea"></option>
            </select>
        </div>
        <button onClick = " " >Create New Idea</button>
        </div>
    )
}