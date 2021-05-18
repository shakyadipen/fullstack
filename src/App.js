
//import './App.css';
import Header from './Components/header/header';
import About from './Components/about/about';
import Service from './Components/service/service';
import Portfolio from './Components/portfolio/portfolio';
import Contact from './Components/contacts/contactus';
import Footer from './Components/footer/footer';
//import Resume from './Components/resume/resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
