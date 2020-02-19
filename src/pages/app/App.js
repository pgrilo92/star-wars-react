import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import StarshipPage from '../starship-page/StarshipPage';
import {getStarships} from '../../services/sw-api.js'
import Starships from '../../components/starships/Starships'

class App extends React.Component {
  state = {
    starships: [],
    loading: true
  }

  async componentDidMount() {
    const results = await getStarships()
    this.setState({
      starships: results.results,
      loading: false,
    })
  }

  render(){
  // if (this.state.loading) return (<div>Loading...</div>)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Starships</h1>
      </header>

      <Switch>
        <Route exact path='/' render={
          () => <Starships starships={this.state.starships}/>
        } />
        <Route path='/starships/:id'
        render={props => {
          return(
            <StarshipPage loading={this.state.loading} {...props} starships={this.state.starships} />
          ) }}/>
      </Switch>
    </div>
  );
  }
}

export default App;
