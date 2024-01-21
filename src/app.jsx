import { RouterProvider } from 'react-router-dom';

import './app.scss';

import UnderConstruction from './components/under-construction';
import router from './routes';

function App() {
  return <>
    { import.meta.env.VITE_UNDER_CONSTRUCTION == 1 && <UnderConstruction /> }
    <RouterProvider router={router}/>
  </>;
}

export default App;