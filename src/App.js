import {Route, Routes} from "react-router-dom";
import React, {useState} from 'react';
import LandingPage from './LandingPage'
import Home from './Home.js';
import CreateListForm from './CreateListForm'
import Input from './CustomComponents/Input'
import axios from 'axios';
// require('dotenv').config()

//TODO: add local storage or db
//TODO: make responses based on form

function App() {
	const [listNames, setListNames] = useState(['test']); 
	const [reqs, setreqs] = useState({})
	const [reqsSent, setReqsSent] = useState(0)
	// I am assuming 
	async function addList(newName, items){
		setListNames([...listNames, newName])
		let response = await axios.get(
			`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients`, {
			params: {
				//TODO: integrate ingredients param w/ user's entered items on lists 
				ingredients: newName, //search param
				ranking: '1',
				ignorePantry: 'true',
				number: '5'
			},
			headers: {
				'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
				'x-rapidapi-key': '13e6e01559msh8cc0cccff7f6873p106fa7jsnd0ab16d808fd'
			} }
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
		<Routes>
			<Route path="/" element={<LandingPage/>}/>
			<Route path="/home" element={<Home listNames={listNames}/>}/>
			<Route path="/create-list" element={<CreateListForm listNames={listNames} addList={addList}/>}/>
		</Routes>
	);
}

export default App;
