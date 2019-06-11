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
  componentDidMount() {
    const authToken = window.sessionStorage.getItem("auth_token")

    if (authToken !== null) {
      this.setState({loggedIn: true});
    }
  }


  async toggleLogin(event, value){
    if (!this.state.loggedIn) {
      event.preventDefault();
      if (value) {
        try {
          APICalls.postUserData(value);
          let tokenData = await APICalls.getToken();
          window.sessionStorage.setItem("auth_token", tokenData.auth);
          this.setState({loggedIn: true})
        } catch(err) {
          console.log(err);
        }

      }
      else alert("Please enter a username");
    }
    else {
      this.setState({loggedIn: false});
      window.sessionStorage.setItem("auth_token", null);
    }


  };



  render() {
  return (
    // if logged out, display login page
    <div>
    {(!this.state.loggedIn ? <Login onSubmit={this.toggleLogin}/> : <MainPage handleClick={this.toggleLogin}/>)}
    </div>

  );
}
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
