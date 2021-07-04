import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import allToken from './Screens/allToken'
import createToken from './Screens/createToken'
import transfer from "./Screens/transfer";
import TokenInfo from './Screens/TokenInfo'


class Routes extends Component {
  constructor() {
    super();
    this.state = {
      // redirectToLogin: false,
    };
  }

  componentDidMount = async () => {
    // const usertoken = await window.sessionStorage.getItem("usertoken");

    // if (!usertoken) {
    //   this.setState({ redirectToLogin: true });
    // }
  };

  render() {
    const { redirectToLogin } = this.state;

    return (
      <BrowserRouter>
        <Switch>
        <Route path={"/TokenInfo"} component={TokenInfo} />
          <Route path={"/Token"} component={createToken} />
         <Route path={"/Transfer"} component={transfer} />
          <Route path={"/"} component={allToken} />
        </Switch>
        
        {/* {redirectToLogin && <Redirect to={"/"} />} */}
      </BrowserRouter>
    );
  }
}

export default Routes;
