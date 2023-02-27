import React, { Component } from "react";
import "./App.css";
import Address from "./Components/Address";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfUsers: [],
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api?results=25").then((res) => {
      const userArray = res.data.results;
      this.setState({ arrayOfUsers: userArray });
      // console.log(this.state.arrayOfUsers);
      // console.log(this.state.arrayOfUsers[0].name.first);
    });
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.arrayOfUsers.map((user, index) => {
            return (
              <Address
                key={index}
                index={index}
                firstName={user.name.first}
                lastName={user.name.last}
                image={user.picture.thumbnail}
                email={user.email}
                location={user.location.city}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
