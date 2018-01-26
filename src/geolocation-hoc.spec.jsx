import { shallow, mount } from 'enzyme';
import React from 'react';
import ExtGeolocation from './index';

// some component that needs Lat and Lng
const LocDisplay = () => <div />;

test('No props passed to HOC, default passed to child', () => {
  const LocDisplayWithGeolocation = ExtGeolocation(LocDisplay);
  const props = {
    lat: 37.40732840164027,
    lng: -122.25696518263857,
    noGeolocation: null,
  };
  const wrapper = shallow(<LocDisplayWithGeolocation />);

  expect(wrapper.instance().props).toEqual(props);
});

test('Props passed to HOC passed on to child', () => {
  const props = { lat: 37.128, lng: -122.256, noGeolocation: true };
  const LocDisplayWithGeolocation = ExtGeolocation(LocDisplay);
  const wrapper = shallow(<LocDisplayWithGeolocation
    lat={props.lat}
    lng={props.lng}
    noGeolocation={props.noGeolocation}
  />);

  expect(wrapper.instance().props).toEqual(props);
});

test('Navigator.geolocation Approved', () => {
  const LocDisplayWithGeolocation = ExtGeolocation(LocDisplay);

  const sampleLocation = {
    coords: {
      altitude: null,
      altitudeAccuracy: null,
      geolocation: true,
      heading: null,
      latitude: 38.5,
      longitude: -122.5,
      accuracy: 23,
      speed: null,
    },
    timestamp: 1516904839703,
  };
  const mockGeolocation = {
    getCurrentPosition: jest.fn(cb => cb(sampleLocation)),
  };

  global.navigator.geolocation = mockGeolocation;

  const wrapper = mount(<LocDisplayWithGeolocation />);
  expect(wrapper.state()).toEqual({
    alt: null,
    altAcc: null,
    geolocation: true,
    heading: null,
    lat: 38.5,
    lng: -122.5,
    locAcc: 23,
    speed: null,
    timestamp: 1516904839703,
  });
});

test('Navigator.geolocation Blocked', () => {
  const LocDisplayWithGeolocation = ExtGeolocation(LocDisplay);

  global.navigator.geolocation = null;

  const wrapper = mount(<LocDisplayWithGeolocation />);
  expect(wrapper.find(LocDisplay).props()).toEqual({
    alt: null,
    altAcc: null,
    geolocation: false,
    heading: null,
    lat: 37.40732840164027,
    lng: -122.25696518263857,
    locAcc: null,
    speed: null,
    timestamp: expect.any(Number),
  });
});
