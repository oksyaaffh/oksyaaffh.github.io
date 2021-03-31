import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import PokemonDetail from './components/pages/PokemonDetail';
import PokemonList from './components/pages/PokemonList';
import MyPokemonList from './components/pages/MyPokemonList';

class App extends React.Component{
  render(){
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/PokemonList' exact component={PokemonList}/>
        <Route path='/PokemonDetail' exact component={PokemonDetail}/>
        <Route path='/MyPokemonList' exact component={MyPokemonList}/>
      </Switch>
      </Router>
  );
  }
}

export default App;
