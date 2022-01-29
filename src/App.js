import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import theme from "./Theme";
import {Route, Routes} from "react-router-dom";
import React, {useState} from 'react';
import LandingPage from './LandingPage'
import Home from './Home.js';
import CreateListForm from './CreateListForm'
import Input from './CustomComponents/Input'
import axios from 'axios';

//TODO: add local storage or db
//TODO: make responses based on form


function App() {
	const [listNames, setListNames] = useState([]); 
	const [reqs, setreqs] = useState({})
	const [reqsSent, setReqsSent] = useState(0)
	async function addList(newName, items){
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

		console.log(reqs)
	}

	return (
		<ThemeProvider className="App" theme={theme}>
			<Routes>
				<Route path="/" element={<LandingPage/>}/>
				<Route path="/home" element={<Home listNames={listNames}/>}/>
				<Route path="/create-list" element={<CreateListForm listNames={listNames} addList={addList}/>}/>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
