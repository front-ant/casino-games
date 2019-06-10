import React, {Component} from "react";
import * as APICalls from "../APICalls";
import Game from "./Game"

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: false,
      games: []
    }
  }
  async componentDidMount() {
    this.setState({isLoading: true});
    try {
      let loadedGames = await APICalls.loadGames();
      this.setState({games: loadedGames});
      this.setState({isLoading: false});


  } catch (error) {
    this.setState({error, isLoading: false})}
  }


  render() {

    return(
      <div>
        <header>
          <h1>This is the Main Page</h1>
          <button onClick={this.props.handleClick}>Logout</button>
        </header>
        {(this.state.isLoading ? <div>Loading...</div> :
          (this.state.error ? <div>Something went wrong while trying to fetch the games, try again later!</div> :
            <ul>
              {this.state.games.map(g => (
                <Game
                key={g.id}
                title={g.title}
                description={g.tagline}
                image={g.pic}
                 />)
              )}
            </ul>))}

      </div>
    );
}

};
export default MainPage;
