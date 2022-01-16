import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import theme from "./Theme";
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
	const [listNames, setListNames] = useState(['sample 1', 'sample 2']); 
	const [reqs, setreqs] = useState({})
	const [reqsSent, setReqsSent] = useState(0)
	
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	  }
	
	async function addList(newName, items){
		//newName = newName.toLowerCase().replace(' ', '-')
		
		newName = 'new-list'
		setListNames([...listNames, newName])
		let response = await axios.get(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${'chicken'}&app_id=2c914bb6&app_key=29ddc3da0c3f85c0006b837d970a5c7d&random=true&diet=${'high-protein'}&mealType=${'Dinner'}`
			)
		setReqsSent(reqsSent+1);
		setreqs(
			()=>{
				return {...reqs, [newName]: response.data.hits.map(item=>item.recipe)}
			}
		)
		await sleep(1000);
		console.log(reqs)
		window.location.assign(`/lists/${newName}`)
	}

	useEffect(() => {
		console.log(reqs)
	})

	return (
		<ThemeProvider className="App" theme={theme}>
			<Routes>
				<Route path="/" element={<LandingPage/>}/>
					<Route path="lists" element={<Home listNames={listNames}/>}>
						<Route exact path=":newList" element={<Recipes/>}/>
					</Route>
					<Route path="create-list" element={<CreateListForm listNames={listNames} addList={addList}/>}/>
				<Route/>
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
						<p>There's nothing here!</p>
						</main>
					}/>
			</Routes>
		</ThemeProvider>
	);
}

export default App;

/*



*/