import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { theme } from './style';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<Router />
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
};
