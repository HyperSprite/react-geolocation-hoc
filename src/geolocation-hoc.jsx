import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** Latitude */
  lat: PropTypes.number,
  /** Longitude */
  lng: PropTypes.number,
  /** True to Dissable Geolocation */
  noGeolocation: PropTypes.bool,
};

const defaultProps = {
  lat: 37.40732840164027,
  lng: -122.25696518263857,
  noGeolocation: null,
};

const ExtGeolocation = (Component) => {
  class GeolocationContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lat: null,
        lng: null,
        /** geolocation === true if location is geo based, else false */
        geolocation: !this.props.noGeolocation,
        /**
        * locationReady it true when ready to pass state and props to
        * the child component
        * noGeolocation === true || resolution of getCurrentPosition
        */
        locationReady: this.props.noGeolocation,
      };
      this.handleSuccess = this.handleSuccess.bind(this);
      this.handleError = this.handleError.bind(this);
    }

    componentDidMount() {
      if (navigator.geolocation && this.state.geolocation) {
        navigator.geolocation.getCurrentPosition(this.handleSuccess, this.handleError);
      } else {
        this.handleError();
      }
    }

    handleSuccess(position) {
      this.setState({
        timestamp: position.timestamp,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        locAcc: position.coords.accuracy,
        alt: position.coords.altitude,
        altAcc: position.coords.altitudeAccuracy,
        heading: position.coords.heading,
        speed: position.coords.speed,
        geolocation: true,
        locationReady: true,
      });
    }

    handleError() {
      this.setState({
        alt: null,
        altAcc: null,
        heading: null,
        lat: this.props.lat,
        lng: this.props.lng,
        locAcc: null,
        speed: null,
        timestamp: new Date().getTime(),
        geolocation: false,
        locationReady: true,
      });
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  }

  GeolocationContainer.propTypes = propTypes;
  GeolocationContainer.defaultProps = defaultProps;
  return GeolocationContainer;
};

export default ExtGeolocation;
