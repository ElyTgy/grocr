import {Route, Routes} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import LandingPage from './LandingPage'
import Home from './Home.js';
import CreateListForm from './CreateListForm'
import axios from 'axios';
import Recipes from './Recipes';

//TODO: add local storage or db
//TODO: make responses based on form


//TODO: try catch

function App() {
	const [lists, setLists] = useState({'test':{}}); 
	
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	
	function addList(newList){
		//window.location.assign(`/lists/${newList.listName}`)
		let listCopy = Object.assign({}, newList)
		delete listCopy.listName
		setLists({...lists, [newList.listName]:listCopy})
		console.log({...lists, [newList.listName]:listCopy})
		//newName = newName.toLowerCase().replace(' ', '-')
		
		//newName = 'new-list'
		//setListNames([...listNames, newName])
		//let response = await axios.get(
		//	`https://api.edamam.com/api/recipes/v2?type=public&q=${'chicken'}&app_id=2c914bb6&app_key=29ddc3da0c3f85c0006b837d970a5c7d&random=true&diet=${'high-protein'}&mealType=${'Dinner'}`
		//	)
		//setReqsSent(reqsSent+1);
		//setreqs(
		//	()=>{
		//		return {...reqs, [newName]: response.data.hits.map(item=>item.recipe)}
		//	}
		//)
		//await sleep(1000);
		//console.log(reqs)
	}

	useEffect(()=>{
	})

	return (

		<Routes>
			<Route path="/" element={<LandingPage/>}/>
			<Route path="/lists" element={<Home listNames={Object.keys(lists)}/>}/>
			<Route path="/create-list" element={<CreateListForm listNames={Object.keys(lists)} addList={addList}/>}/>
		</Routes>
	);
}

export default App;
