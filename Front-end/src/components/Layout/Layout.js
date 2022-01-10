import React, { Component } from "react";
//import Aux from '../../hoc/ReactFrag';
import "./Layout.css";
import Navbar from "../UI/Navigation/Navbar/Navbar";

class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />

        <main style={{ background: "blue" }} className="Content">
          {this.props.children}
        </main>
      </>
    );
  }
}

export default Layout;
