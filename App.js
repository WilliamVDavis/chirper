    
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
<Route path="/" exact strict render={ 
  ()=> { 
    return ( <h1>Welcome Home Chirper</h1>);
  }
  }/>
  
  <Route path="/feed" exact strict render={
  ()=> {
    return ( <h1>About Time You Signed Up</h1>);
  }
  }/>
  <Route path="/user:username" exact strict render={({match})=>(
    this.state.loggedIn ? ( <User username={match.params.username}/>) : (<Redirect to='/'/>)
  )}/>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/feed">Feed</Link>
</li>
</ul>
<form>
  <div class="form group">
    <label for="InputUsername">
  Username</label>
  <input type="text" name="username" placeholder="Enter email"></input>
  </div>
  <div class="form group">
  <label for="InputPassword">
    Password </label>
  <input type="text" name="password" placeholder="Enter password"></input>
  </div>
</form>
<input type="button" value="Log in" onClick={this.loginHandle.bind(this)}/>
    </div>
    </Router>
  );
}
}
export default App;