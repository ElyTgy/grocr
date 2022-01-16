import "./ListBox.css"

export default function ListBoxItem(props){
    console.log('hi')
    return(
    <div className="list-item-box">
        <p className="list-name">{props.name}</p>
    </div>)
}