import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import PersonalProjects from "./components/pages/PersonalProjects";
import Curriculum from "./components/pages/Curriculum";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Projects} path="/projects" />
        <Route component={PersonalProjects} path="/personalProjects" />
        <Route component={Curriculum} path="/curriculum" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
