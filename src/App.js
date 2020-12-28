import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import Random from './components/Joke/random.js';
import Multiple from './components/Joke/multiple.js';
import Specific from "./components/Joke/specific";
import ChangeName from './components/Joke/changeName';


import GlobalStyle from './styles/global';


function App() {
  return (

<>



<BrowserRouter>
  <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/random" component={Random} />
      <Route path="/multiple" component={Multiple} />
      <Route path="/specific" component={Specific} />
      <Route path="/changeName" component={ChangeName} />

    </Switch>
    <Footer />
</BrowserRouter>


    <GlobalStyle />


</>
  );
}

export default App;
