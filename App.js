import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (params)=> {
  return (<h1>Welcome User {params.username}</h1>)
}
class App extends Component{
  state = {
    loggedIn: false
  }
  loginHandle = ()=> {
    this.setState({loggedIn:true})
  }
render() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/about">About</Link>
</li>
</ul>

<input type="button" value="log in" onClick={this.loginHandle.bind(this)}/>
<Route path="/" exact strict render={
  ()=> {
    return ( <h1>Welcome Home Chirper</h1>);
  }
  }/>
  <Route path="/about" exact strict render={
  ()=> {
    return ( <h1>About Time You Signed Up</h1>);
  }
  }/>
  <Route path="/user:username" exact strict rendeer={({match})=>(
    this.state.loggedIn ? ( <User username={match.params.username}/>) : (<Redirect to='/'/>)
  )}/>
    </div>
    </Router>
  );
}
}
export default App;
