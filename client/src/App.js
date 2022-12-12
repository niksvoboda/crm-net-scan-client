import LeftPanel from './components/LeftPanel'
import styles from './assets/css/style.css'
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <LeftPanel/>
       <div id="right-panel" className="right-panel">
       <Header/>
       <Content/>
      </div>
   </div>
  );
}

export default App;
