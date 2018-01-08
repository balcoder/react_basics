import React from "react";
import { render } from "react-dom";



import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    };
  }
  onGreet(){
    alert("Hello");
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }
  render() {
    return (
      <div>
        <Header homeLink={this.state.homeLink}/>
        <div  className="container">
          <div className="row">
            <div className="col-xs-10">
              <Home
                name={"Des"}
                initialAge={28}
                greet={this.onGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                initialLinkName={this.state.homeLink}
              />
            </div>
          </div>
        </div>
    </div>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
