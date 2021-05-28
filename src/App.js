import './App.css';
import Preloader from "./Preloader";
import { Container } from 'react-materialize';

function App() {

  return (
    <div className="App">
        <div className="content">
            <Preloader />
        </div>
    </div>
  );
}

export default App;
