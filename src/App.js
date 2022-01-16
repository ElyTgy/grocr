import logo from './logo.svg';
import './App.css';
import Switch from "./Switch";
import {ThemeProvider} from '@mui/material/styles';
import theme from "./Theme";
import Button from './Button.js'
import BpCheckbox from './BpCheckbox.js';

//TODO: install and include the title font

function App() {
  return (
	  <ThemeProvider theme={theme}>
		<div className="App">
			<Switch/>
			<Button color="green">HI</Button>
			<BpCheckbox/>
		</div>
	  </ThemeProvider>
  );
}

export default App;
