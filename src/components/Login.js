import React, {Component} from "react";
class Login extends Component {
  render() {
  return(
    <div>
      <header>
      <h1>This is the Login Page</h1>
      </header>
      <form>
        <label htmlFor="user">Username</label>
        <input type="text" placeholder="Enter Username"></input>
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="Enter Password"></input>
        <button type="submit" onClick={this.props.handleClick}>Login</button>
      </form>
    </div>
  );
};
}
export default Login;
