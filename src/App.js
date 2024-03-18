// import logo from './logo.svg';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

import Movies from './Components/Movies';
import Customer from './Components/Customer';
import NotFound from './Components/NotFound';
import Buy from './Components/Buy';
import FormMovie from './Components/FormMovie';
import Header from './Components/Header';

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
    <>
      <Header />
       <main className='container text-center'>
        <div className='row'>
          <Switch>
            <Route path="/movies/:id" component={FormMovie}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customer" component={Customer}></Route>
            <Route path="/buy" component={Buy}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="not-found"/> {/*redirect ini berfungsi ketika sedang melakukan pencarian dengan huruf asal, maka akan muncul not found */}
          </Switch>
          {/* karena moviesnya sudah dipanggil di atas jadi yg disini hapus saja */}
        </div>
       </main>
    </>
   
    
  );
}

export default App;
