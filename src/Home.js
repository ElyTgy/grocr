import './Link.css'
import BoxList from './BoxList'

export default function(props){
    let myListItems = ''

    if(!props.lists){
        myListItems = <p>You currently have no lists. <span className="link">Create a new list!</span></p>
    }
    else{
        myListItems = <BoxList names={["sample","sample","sample","sample","sample"]}/>
    }
    
    return(
    <div class="mx-2 container-fluid">
        <h1 className='my-4'>My Lists</h1>
        {myListItems}
    </div>)
}