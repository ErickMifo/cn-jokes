import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Random from './components/Joke/random.js';
import Multiple from './components/Joke/multiple.js';

import GlobalStyle from './styles/global';

function App() {
  return (

<>



<BrowserRouter>
  <Header />
    <Switch>
      <Route path="/random" component={Random} />
      <Route path="/multiple" component={Multiple} />
    </Switch>
</BrowserRouter>


    <GlobalStyle />


</>
  );
}

export default App;
