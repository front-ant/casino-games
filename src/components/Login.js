import React, {Component} from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
  }
  //controlled component
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
  return(
    <div>
      <header>
      <h1>This is the Login Page</h1>
      </header>
      <form onSubmit={e => this.props.handleSubmit(e, this.state.value)}>
        <label htmlFor="user">Username</label>
        <input type="text" placeholder="Enter Username" value={this.state.value} onChange={this.handleChange.bind(this)}></input>
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="No need to enter anything..."></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
}
export default Login;
