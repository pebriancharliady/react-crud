import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../css/App.css";
import User from "./User/User";
import CreateUser from "./User/CreateUser";
import UserEdit from "./User/UserEdit";
import CustomStyles from '../css/CustomStyles';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <CustomStyles />
        <div id="App-sidebar-wrapper">
          <Sidebar />
        </div>
        <div id="App-page-content-wrapper">
          <Header />
          <div id="App-main-content-wrapper">
            <Switch>
              <Route exact path="/user">
                <User />
              </Route>
              <Route exact path="/user/create">
                <CreateUser />
              </Route>
              <Route exact path="/user/detail/:username" component={UserEdit} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
