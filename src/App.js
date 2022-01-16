import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import theme from "./Theme";
import {Route, Routes} from "react-router-dom";
import LandingPage from './LandingPage'

//TODO: install and include the title font

function App() {
  return (
	  <ThemeProvider className="App" theme={theme}>
		<LandingPage/>
	  </ThemeProvider>
	
	);
}

export default App;

