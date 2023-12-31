import './app.scss';

import UnderConstruction from './components/under-construction';
import Home from './pages/home';

function App() {
  return <>
    { import.meta.env.VITE_UNDER_CONSTRUCTION && <UnderConstruction /> }
    <Home />
  </>;
}

export default App;