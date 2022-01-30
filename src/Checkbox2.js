import React from 'react';

export default function CheckBox(props){
    const [toggleState, toggle] = React.useState(false)
  
    return (
    <div class="form-check">
      <label onClick={()=>toggle(!toggleState)} 
            className={`cursor-pointer inline-block ${!toggleState ? 'text-gray-800' : 'text-green-400 font-bold'}`}>
        {props.name}
      </label>
    </div>

    )
}