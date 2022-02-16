import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="container">
          <Header/>
          <NavBar/>
      </div>
    </div>
  );
}

export default App;
