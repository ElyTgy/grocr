import ListBoxItem from "./ListBoxItem";
import ListAddItem from "./ListAddItem";
import './ListBox.css'

export default function BoxList(props){
    return(
        <div className="box-list">
            {props.listNames.map(name=><ListBoxItem name={name}/>)}
            {<ListAddItem onClick={()=>window.location.assign('/create-list')}/>}
        </div>
    )
}
