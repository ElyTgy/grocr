import "./ListBox.css"

export default function ListBoxItem(props){
    return(
    <div onClick={()=>alert('redirecting... to be implemented')} className="list-item-box">
        <p  className="list-name">{props.name}</p>
    </div>)
}