import style from './App.module.css';
import Notes from './components/Notes/Notes';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className= {style.App}>
      <Sidebar/>
      <Notes/>
    </div>
  );
}

export default App;
