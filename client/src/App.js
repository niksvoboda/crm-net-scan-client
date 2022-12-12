import LeftPanel from './components/leftPanel'
import styles from './assets/css/style.css'
import Header from './components/header';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <LeftPanel/>
      <div id="right-panel" className="right-panel">
       <Header/>
      
      </div>
       
    </div>
  );
}

export default App;
