import './App.css';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HeaderCard from './Components/HeaderCard/HeaderCard';
import Home from './Pages/Home/Home';
import Teachers from './Pages/Teachers/Teachers';

function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     <Teachers/>


      {/* footer of the app, displayed at the very bottom */}
      <Footer />
    </div>
  );
}

export default App;
