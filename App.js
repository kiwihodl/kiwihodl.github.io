import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Articles } from "./components/Articles";
import { Podcasts } from "./components/Podcasts";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Articles />
      <Podcasts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;