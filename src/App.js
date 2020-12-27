import { BrowserRouter, Switch, Route } from "react-router-dom";


import Home from './components/Home';
import Header from './components/Header';
import Random from './components/Joke/random.js';
import Multiple from './components/Joke/multiple.js';
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
      <Route path="/changeName" component={ChangeName} />

    </Switch>
</BrowserRouter>


    <GlobalStyle />


</>
  );
}

export default App;
