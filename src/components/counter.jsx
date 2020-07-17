import React, { Component } from "react";

class Counter extends Component {
  //State object is used For any data required
  state = {
    count: 0,
  };

  /*Handling (Binding) Multiple Events in event handler //
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  handleIncrement = (product) => {
    //this.state.count++;
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  /*doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };*/

  render() {
    /*
        let variable = "bagde m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
         <span className={variable}>{this.formatCount()}</span>
    */

    return (
      <div /*React.Fragment*/>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={/*Function Reference*/ () => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div /*React.Fragment*/>
    );
  }

  /* For rendering Tags, if any
        
        Create Array in state and then return ...

        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
         */

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
