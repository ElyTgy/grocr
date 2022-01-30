import React, { useState } from "react";

export default function BaseToggle(props)
{
    const initState = props.toggled ? true : false;
    const [toggled, setToggle] = useState(initState)
    let icon = null;
    if(toggled){icon = props.active}else{icon = props.inactive}
    return(
        <div style={{cursor:"pointer", display:"inline"}} onClick={()=>setToggle(!toggled)}>{icon}</div>
    )
}