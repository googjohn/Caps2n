import Hero from "./components/Hero";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Carousel from './components/Carousel';
import { Ourteam } from "./components/Ourteam";
// import { Header, Footer, Hero, Carousel } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Header />
      <Carousel />
      <Ourteam/>
      <Footer />
    </div>
  );
}

export default App;
