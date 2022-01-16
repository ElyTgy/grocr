import ListBoxItem from "./ListBoxItem";
import ListAddItem from "./ListAddItem";
import './ListBox.css'

export default function BoxList(props){
    return(
        <div className="box-list">
            {props.names.map(name=><ListBoxItem name={name}/>)}
            {<ListAddItem/>}
        </div>
    )
}