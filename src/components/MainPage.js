import React, {Component} from "react";
import * as APICalls from "../APICalls";
import Game from "./Game"

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: false,
      games: [],
      list: true
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

toggleStyles() {
  if (this.state.list) {
    this.setState({list: false})
  }
  else {
    this.setState({list: true})
  }
}

  render() {

    return(
      <div>
        <header>
          <h1>This is the Main Page</h1>

        </header>
        <nav>
          <button onClick={this.props.handleClick}>Logout</button>
          <div>
          {/* switch between stylesheets*/}
            <link rel="stylesheet" type="text/css" href={(this.state.list ? "src/games-container-flex.css" : "src/games-container-grid.css")} />
            <button onClick={this.toggleStyles.bind(this)}>Toggle View</button>
          </div>
        </nav>
        {/* conditional rendering based on success of fetch request*/}
        {(this.state.isLoading ? <div>Loading...</div> :
          (this.state.error ? <div>Something went wrong while trying to fetch the games, try again later!</div> :
            <div className="games-container">
            {/* create game entries based on fetch request*/}
              {this.state.games.map(g => (
                <Game
                key={g.id}
                title={g.title}
                description={g.tagline}
                image={g.pic}
                 />)
              )}
              </div>

            ))}

      </div>
    );
}

};
export default MainPage;
