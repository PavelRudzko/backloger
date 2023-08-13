import React from 'react'
const [ideaField,setIdeaField] = useState("")
const [describeIdeaField,setDescribeIdeaField] = useState("")

 function IdeaItem(){
    return (
<>
<div>
<label>Idea</label>
<input
  placeholder="Input your idea "
  value={ideaField}
  onChange={(e) => setIdeaField (e.target.value.match(/^[a-zA-Z\s]*$/))}
/>
</div>
<div>
<label>Description</label>
<input
  placeholder="Input descriptipn of your idea "
  value={describeIdeaField}
  onChange={(e) => setDescribeIdeaField (e.target.value.match(/^[a-zA-Z\s]*$/))}
/>
</div>
{/* //add new button */}
</>

    )
}