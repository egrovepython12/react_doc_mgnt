import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import UploadFile from "../containers/uploadfile";


class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={UploadFile}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routing;
