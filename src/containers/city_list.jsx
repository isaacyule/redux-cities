import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { setCities } from '../actions';

//Components / containers
import City from './city.jsx';

class CityList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city =>
          <City city={city} key={city.name} />
        )}
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setCities: setCities
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList)
