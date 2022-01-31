import * as React from 'react';

export default function Button(props) {
    return <button onClick={props.onClick} className="bg-color-none px-5 py-2 rounded-lg
                            text-white bg-green-400">
            {props.children}</button>
}