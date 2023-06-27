import Hero from "./components/Hero";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Carousel from './components/Carousel';
import CardList from './components/CardList';
import { CatalogTitle } from './components/CatalogTitle';
// import { Header, Footer, Hero, Carousel } from './components';
import './App.css';
import { Property } from "./pages/Property";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Header />
      <Carousel />
      <CatalogTitle />
      <CardList />
      <Property />
      <Footer />
    </div>
  );
}

export default App;
