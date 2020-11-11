import './App.css';

import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./sections/About"
import Contribute from "./sections/Contribute"
import HelpExamples from "./sections/HelpExamples"
import SignUp from "./sections/SignUp"
import PageNav from "./components/PageNav"

function App() {
  return (
    <div className="App">
      <PageNav />
      <Header />

      

      <section id={"about"}>
        <About />
      </section>

      <section id={"helpexamples"}>
        <HelpExamples />
      </section>

      <section id={"signup"}>
        <SignUp />
      </section>

      <section id={"contribute"}>
        <Contribute />
      </section>
        
        <Footer />

    </div>
  );
}

export default App;
