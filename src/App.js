import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import theme from "./Theme";
import {Route, Routes} from "react-router-dom";
import React, {useState} from 'react';
import LandingPage from './LandingPage'
import Home from './Home.js';
import CreateListForm from './CreateListForm'
import Input from './CustomComponents/Input'

function App() {
	const [listNames, setListNames] = useState(['sample1', 'sample2']); //fetch initial state from local storage
	function addList(newName){
		//also save anme and default settings to local storage
		setListNames([...listNames, newName])
	}

	return (
		<div>
			<CreateListForm listNames={listNames} addList={addList}/>
		</div>
	);
}

export default App;

/*

<ThemeProvider className="App" theme={theme}>
	<Routes>
		<Route path="/" element={<LandingPage/>}/>
		<Route path="/home" element={<Home listNames={listNames}/>}/>
		<Route path="/create-list" element={<CreateListForm listNames={listNames} addList={addList}/>}/>
	</Routes>
</ThemeProvider>

*/