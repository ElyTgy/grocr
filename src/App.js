import logo from './logo.svg';
import './App.css';
import Switch from "./Switch";
import {ThemeProvider} from '@mui/material/styles';
import theme from "./Theme";
import Button from './Button.js'
import BpCheckbox from './BpCheckbox.js';
import BaseToggle from './BaseToggle.js';

//TODO: install and include the title font

function App() {
  return (
	  <ThemeProvider theme={theme}>
			<div className="App">
				<Switch/>
				<Button color="green">HI</Button>
				<BpCheckbox/>
				<BaseToggle active={<svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0.188692 12.0953C-0.0161055 11.4457 0.100378 10.6917 0.657164 10.1131L8.94749 1.49753C9.73429 0.679861 11.043 0.67986 11.8298 1.49753L20.1201 10.1131C20.6122 10.6245 20.7604 11.2729 20.6468 11.8651V13.2191V20.5856C20.6468 24.4515 17.5128 27.5855 13.6468 27.5855H7.18869C3.3227 27.5855 0.188692 24.4515 0.188692 20.5855V13.2191V12.0953ZM2.18869 13.4998V20.5855C2.18869 23.347 4.42727 25.5855 7.18869 25.5855H13.6468C16.4082 25.5855 18.6468 23.347 18.6468 20.5856V13.4998H2.18869ZM18.4088 11.2191L10.3886 2.88428L2.36848 11.2191H18.4088Z" fill="#528E3D"/>
									</svg>}
							inactive={<svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0943755 12.0954C-0.110441 11.4457 0.00603523 10.6917 0.562834 10.1131L8.85316 1.49753C9.63996 0.679861 10.9487 0.67986 11.7355 1.49753L20.0258 10.1131C20.5179 10.6245 20.666 11.2728 20.5525 11.865V13.219V20.5855C20.5525 24.4515 17.4185 27.5855 13.5525 27.5855H7.09438C3.22839 27.5855 0.0943755 24.4515 0.0943755 20.5855V13.219V12.0954ZM2.09438 13.4998V20.5855C2.09438 23.3469 4.33295 25.5855 7.09438 25.5855H13.5525C16.3139 25.5855 18.5525 23.3469 18.5525 20.5855V13.4998H2.09438ZM18.3144 11.219L10.2943 2.88428L2.27422 11.219H18.3144Z" fill="#C4C4C4"/>
							</svg>} />
				</div>
	  </ThemeProvider>
  );
}

export default App;
