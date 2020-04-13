import React from "react";
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Scroll from "../../components/Scroll/Scroll";
import ErrorBoundary from "../ErrorBoundry/ErrorBoundry";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      robots: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ robots: data });
      })
      .catch(err => console.log(err));
  }
  onInputChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (robots.length === 0) {
      return <h1>Loading robots...</h1>;
    } else {
      return (
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox onInputChange={this.onInputChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList filteredRobots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
