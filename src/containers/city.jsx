import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions/index.js';

class City extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {

    let classes = "active-city";

    if (this.props.city === this.props.activeCity ) {
      classes += " selected"
    };

    return (
      <div className={classes} onClick={this.handleClick}>
        <p>{this.props.city.name}</p>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setActiveCity: setActiveCity
    },
    dispatch
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(City);
