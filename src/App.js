import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import theme from "./Theme";
import {Route, Routes} from "react-router-dom";
import LandingPage from './LandingPage'
import Home from './Home.js';


//TODO: install and include the title font

function App() {
  return (
	  <ThemeProvider className="App" theme={theme}>
		<Home lists={[]}/>
	  </ThemeProvider>
	
	);
}

export default App;

