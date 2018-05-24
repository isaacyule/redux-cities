import React, { Component } from 'react';

class City extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="city">
        <p>{this.props.city.name}</p>
      </div>
    );
  }
};

export default City;
