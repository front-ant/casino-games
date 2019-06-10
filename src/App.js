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
      let authCheck = await APICalls.checkLogin(value);
      if (authCheck !== undefined) {
        alert(`Logging in user ${value}`)
        this.setState({loggedIn: true});
      }
      else {alert('Login failed!')};


    }
    else {
      this.setState({loggedIn: false});
    }
  };



  render() {
  return (
    <div>
    {(!this.state.loggedIn ? <Login handleSubmit={this.toggleLogin}/> : <MainPage handleClick={this.toggleLogin}/>)}
    </div>

  );
}
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
