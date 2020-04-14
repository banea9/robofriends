import React from "react";
import { connect } from "react-redux";
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Scroll from "../../components/Scroll/Scroll";
import ErrorBoundary from "../ErrorBoundry/ErrorBoundry";
import "./App.css";
import { setSearchField, requestRobots } from "../../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     // searchField: "",
  //     robots: []
  //   };
  // }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(resp => resp.json())
    //   .then(data => {
    //     this.setState({ robots: data });
    //   })
    //   .catch(err => console.log(err));
    this.props.onRequestRobots();
  }

  // onInputChange = e => {
  //   this.setState({ searchField: e.target.value });
  // };

  render() {
    // const { robots /*searchField*/ } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (isPending) {
      return <h1>Loading robots...</h1>;
    } else {
      return (
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox onInputChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
