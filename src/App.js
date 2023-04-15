import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import Carousel from './Component/Carousel';
import Content from './Component/Content';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Carousel/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
