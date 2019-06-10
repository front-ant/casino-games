import React, {Component} from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      loggedIn: false,
      gridView: true
    }
    this.toggleLogin = this.toggleLogin.bind(this);


  }
  toggleLogin(event){
    if (!this.state.loggedIn) {
      event.preventDefault();
      this.setState({loggedIn: true});
    }
    else {
      this.setState({loggedIn: false});
    }
  };



  render() {
  return (
    <div>
    {(!this.state.loggedIn ? <Login handleClick={this.toggleLogin}/> : <MainPage handleClick={this.toggleLogin}/>)}
    </div>

  );
}
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
