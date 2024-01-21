import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Error from './pages/error';
import About from './pages/about';
import Contact from './pages/contact';
import Docs from './pages/docs';
import GitHub from './pages/github';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home/>,
		errorElement: <Error/>
	},
	{
		path: '/about',
		element: <About/>,
		errorElement: <Error type="unknown"/>
	},
	{
		path: '/contact',
		element: <Contact/>,
		errorElement: <Error type="unknown"/>
	},
	{
		path: '/docs',
		element: <Docs/>,
		errorElement: <Error type="unknown"/>
	},
	{
		path: '/github',
		element: <GitHub/>,
		errorElement: <Error type="unknown"/>
	}
]);

export default router;