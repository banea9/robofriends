import React from "react";
import { connect } from "react-redux";
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Scroll from "../../components/Scroll/Scroll";
import ErrorBoundary from "../ErrorBoundry/ErrorBoundry";
import Header from '../../components/Header/Header'
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

  componentDidMount() {
    this.props.onRequestRobots();
  }


  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (isPending) {
      return <h1>Loading robots...</h1>;
    } else {
      return (
        <div className="tc">
          <Header />
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
