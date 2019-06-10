import React, {Component} from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import * as APICalls from "./APICalls";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      loggedIn: false,
    }
    this.toggleLogin = this.toggleLogin.bind(this);
  }


  async toggleLogin(event, value){
    if (!this.state.loggedIn) {
      event.preventDefault();
      // post input data to the fake database and fetch new data
      if (value) {
        try
      {let authCheck = await APICalls.checkLogin(value);
      if (authCheck !== undefined) {
        alert(`Logging in user ${value}`)
        this.setState({loggedIn: true});
      }
      else {alert('Login failed!')};}
      catch(error) {alert('Login failed!')}
    }
    else {
      alert('Please at least type a username!');
    }
  }
    else {
      this.setState({loggedIn: false});
    }
  };



  render() {
  return (
    // if logged out, display login page
    <div>
    {(!this.state.loggedIn ? <Login handleSubmit={this.toggleLogin}/> : <MainPage handleClick={this.toggleLogin}/>)}
    </div>

  );
}
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
