import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    };
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age -3
    });
    console.log(this.props.homeLink);
  }

  onChangeLink(){
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }
  render() {
    console.log(this.props);
    return(
        <div>
          <p>I'm a new component</p>
          <p>Your name is {this.props.name} , your age is {this.state.age}</p>
          <hr/>
          <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
          <hr/>
          <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
          <hr/>
          <input type="test" value={this.state.homeLink}
            // use es6 syntax to avoid writing bind this
            onChange={(event) => this.onHandleChange(event)}/>
          <button onClick={this.onChangeLink.bind(this)}className="btn btn-primary">Change the Home Link</button>
        </div>
    );
  }
}
Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  greet: PropTypes.func,
  initialLinkName: PropTypes.string
};
