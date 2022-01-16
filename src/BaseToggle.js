import React, { useState } from "react";

export default function BaseToggle(props)
{
    const [toggled, setToggle] = useState(true)
    console.log(toggled)
    let icon = null;
    if(toggled){icon = props.active}else{icon = props.inactive}
    return(
        <div style={{cursor:"pointer"}} onClick={()=>setToggle(!toggled)}>{icon}</div>
    )
}