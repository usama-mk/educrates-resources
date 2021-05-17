import './App.css';
import logo from './assets/logo.svg'
import Body from './Components/Body/Body';
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
        <h2>Welcome to</h2>
        <h1>Educrates Resources</h1>
      </div>

      <HeaderCard/>
      </div>
      {/* app body */}
      {/* welcome  */}
      {/* tabs body */}
      <Body/>
     </div>
  );
}

export default App;
