import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import UploadfileComponent from "../components/uploadfile";
import FilesList from "../components/listfile";


class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={UploadfileComponent}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routing;
