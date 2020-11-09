import './App.css';

import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./sections/About"
import Contribute from "./sections/Contribute"
import HelpExamples from "./sections/HelpExamples"
import SignUp from "./sections/SignUp"

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <HelpExamples />
      <SignUp />
      <Contribute />
      <Footer />
      
    </div>
  );
}

export default App;
