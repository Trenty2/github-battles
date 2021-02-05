import * as React from "react";

export function Saysomething(props) {
  return <div>Hello {props.name}</div>;
}

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    //initial stage that will be manipulated within the component
    this.state = {
      age: 45,
    };
    this.changeAge = this.changeAge.bind(this);
    this.incrementAge = this.incrementAge.bind(this);
  }

  //function that will update the state value regardless of the previous value
  changeAge() {
    this.setState({
      age: 55,
    });
  }

  //function that will update the state value based on the previous state value
  incrementAge() {
    this.setState(({ age }) => {
      return {
        age: age + 5,
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Saysomething name="Trent" /> {this.state.age}
        </div>
        <button onClick={this.changeAge}>Click to change age</button>
        <button onClick={this.incrementAge}>Click to change age</button>
      </React.Fragment>
    );
  }
}
