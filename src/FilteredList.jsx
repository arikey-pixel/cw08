import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "all",
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    this.setState({type: event});
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
      const match = this.state.type === "all" || item.type === this.state.type;
      const searchMatch = item.name.toLowerCase().includes(this.state.search);
      return match && searchMatch;
  }

  render(){
    return (
        <div className = "filter-list">
          <br></br>
          <Dropdown onSelect={this.onFilter}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Type
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
            <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
            <Dropdown.Item eventKey="all">All</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br></br>
          <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
          <List items = {this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;
