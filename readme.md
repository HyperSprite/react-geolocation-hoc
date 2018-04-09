# React Geolocation HOC

This is a small HOC that injects browser geolocation into the child component.

## Usage

### Install
```npm install @hypersprite/react-geolocation-hoc --save```

### Import
```import ExtGeolocation from '@hypersprite/react-geolocation-hoc';```

### In Practice

my-map.js user created file imports ExtGeolocation
```js
const MyMap = (props) => {
  const { lat, lng, geolocation, timestamp } = props;
  /** ... all your other component code
  *
  * use the props as you see fit
  *
  */
};

export default ExtGeolocation(MyMap);
```

Then from your view file

Uses default lat/lng and asks for permission and allows for browser geolocation
```js
<MyMap />
```

Assigns props as default lat/lng and asks for permission and allows for browser geolocation
```js
<MyMap
  lat={39.28756}
  lng={-120.19987}
/>
```

Assigns props as default lat/lng and does NOT ask for premission, disables browser geolocation
```js
<MyMap
  lat={39.28756}
  lng={-120.19987}
  noGeolocation
/>
```

### Scripts

use `npm run <script>`

* `lint` - runs linter
* `test` - runs test
* `test:dev` - runs test in watch mode
* `build` - runs build
* `build:dev` - runs build in watch mode

`npm version <major | minor | patch>`

### API

#### Receives Props

| prop name | type | values | description |
| --------- | ---- | ------ | ----------- |
| lat | Number | Latitudes | Optional if default needed |
| lng | Number | Longitude | Optional if default needed |
| noGeolocation | Boolean | true or false* | true === geolocation is disabled, will not ask |

> noGeolocation can be used with a pre-dialog box asking if they want to enable geolocaton, this way they can say no to you and not set disabled in the browser, giving you the opportunity to ask the next time. See this [Google recommendation](https://developers.google.com/web/fundamentals/native-hardware/user-location/#ask_permission_responsibly) for more information.  

#### New Passed Props

| prop name | type | values | description |
| --------- | ---- | ------ | ----------- |
| lat | Number | Latitudes | Can pass default props or user location |
| lng | Number | Longitude | Can pass default props or user location |
| geolocation | Boolean | true or false* | true: geolocation allowed, false, geolocation blocked |
| timestamp | Number | Unix time in seconds |   |
| refreshLocation | function |  |   |
