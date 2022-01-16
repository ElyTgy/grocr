import ListBoxItem from './ListBoxItem.js'
import ListAddItem from './ListAddItem.js'
import './Link.css'

export default function(props){
    let myListItems = ''

    if(!props.lists){
        myListItems = <p>You currently have no lists. <span className="link">Create a new list!</span></p>
    }
    else{
        myListItems = [
            <ListBoxItem name="This is a  list name"/>, 
            <ListAddItem/>]
    }
    
    return(
    <div class="mx-2 container-fluid">
        <h1 className='my-4'>My Lists</h1>
        {myListItems}
    </div>)
}