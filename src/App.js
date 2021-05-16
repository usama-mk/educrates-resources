import './App.css';
import logo from './assets/logo.svg'
import Header from './Components/Header/Header';
import HeaderCard from './Components/HeaderCard/HeaderCard';

function App() {
  return (
    <div className="App">
      {/*Header wrapper  */}
      {/* Header */}
      <div className="header__wrapper">
      <Header/>
      <div className="welcome__message">
        <p>Welcome to</p>
        <h1>Educrates Resources</h1>
      </div>

      <HeaderCard/>
      </div>
      {/* app body */}
      {/* welcome  */}
      {/* tabs body */}
    </div>
  );
}

export default App;
