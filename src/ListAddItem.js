import "./ListBox.css"

export default function ListAddItem(props){
    return(
    <div className="list-add-box" {...props}>
        <p className="list-name">+</p>
    </div>)
}