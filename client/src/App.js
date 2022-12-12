import LeftPanel from './components/LeftPanel'
import styles from './assets/css/style.css'
import Header from './components/Header';
import Content from './components/Content';
import {
  BrowserRouter,
} from "react-router-dom";
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <LeftPanel/>
       <div id="right-panel" className="right-panel">
       <Header/>
       <AppRouter/>
       </div>
       </div>
    </BrowserRouter>
  
  );
}

export default App;
