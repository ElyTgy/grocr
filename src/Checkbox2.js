import React from 'react';

export default function CheckBox(props){
    const [toggleState, toggle] = React.useState(false)
  
    function onClick(e){
      toggle(!toggleState)
      props.onClick(e)
    }

    return (
    <div className="form-check" className="selection:bg-transparent">
      <label onClick={onClick} 
            className={`cursor-pointer inline-block ${!toggleState ? 'text-gray-800' : 'text-green-400 font-bold'}`}
            >
        {props.children}
      </label>
    </div>

    )
}