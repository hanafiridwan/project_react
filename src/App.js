import logo from './logo.svg';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import './App.css';

import Movies from './Components/Movies';
import Customer from './Components/Customer';
import NotFound from './Components/NotFound';
import Buy from './Components/Buy';
import FormMovie from './Components/FormMovie';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       <h1>Set Up Project</h1>
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <main className='container'>
      <Switch>
        <Router path="/movies" component={Movies}></Router>
        <Router path="/customer" component={Customer}></Router>
        <Router path="/buy" component={Buy}></Router>
        <Router path="/not-found" component={NotFound}></Router>
        <Redirect from="/" exact to="/movies" />
        <Redirect to="not-found"/> {/*redirect ini berfungsi ketika sedang melakukan pencarian dengan huruf asal, maka akan muncul not found */}
      </Switch>
      <Movies />
    </main>
    
  );
}

export default App;
