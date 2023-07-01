import Hero from "./components/Hero";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Carousel from './components/Carousel';
import {Ourteam} from "./components/Ourteam";
import Careers from "./components/Careers";
import  ModalPriPol from "./components/ModalPriPol";
import  ModalTandC  from "./components/ModalTandC";
import  ModalLicensing  from "./components/ModalLicensing";
import Affiliates from "./components/Affiliates";
import  SendInquiries  from "./components/SendInquiries";


// import { Header, Footer, Hero, Carousel } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Header />
      <Carousel />
      <Ourteam/>
      <Careers/>
      <ModalPriPol/>
      <ModalTandC/>
      <ModalLicensing/>
      <Affiliates/>
      <SendInquiries/>
      <Footer />
    </div>
  );
}

export default App;

