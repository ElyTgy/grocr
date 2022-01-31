import BoxList from './BoxList'
import AppBar from './AppBar'

export default function(props){
    let myListItems = ''

    if(props.listNames.length === 0){
        myListItems = <p>You currently have no lists. <a className="link" href="/create-list">Create a new list</a></p>
    }
    else{
        myListItems = <BoxList listNames={props.listNames}/>
    }
    
    return(
        <div className="header-text h-screen dark:bg-grey-400">
        <AppBar/>
        <div class=" mx-2 container-fluid">
            <h1 className='dark:text-white mx-4 my-4'>My Lists</h1>
            {myListItems}
        </div>
        </div>)
}