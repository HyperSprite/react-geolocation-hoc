# React Geolocation HOC

This is a small HOC that injects browser geolocation into the child component.

## Usage:

**Props to pass in:**

* lat: Latitude: Number
* lng: Longitude: Number
* noGeolocation: Boolean - True === geolocation disabled, will not ask

**Props passed to the Child**

* lat: Latitude: Number - Default latitude if geolocation is not used
* lng: Longitude: Number - Default latitude if geolocation is not used
* geolocation: Boolean - True === geolocation allowed by user

> As an example, a fictitious child component named "MyMap" will be used. It could be any child component with any name.

### Install
```js
npm install @hypersprite/react-geolocation-hoc --save
```

### Import into child component ```my-map.jsx```
```js
/** with your imports */
import ExtGeolocation from '@hypersprite/react-geolocation-hoc';
/** local imports etc... */

const MyMap = (props) => {
  const { lat, lng } = props;
  /** ... all your other component code
  *
  * use lat and lng as you see fit
  *
  */
};

export default ExtGeolocation(MyMap);
```


### Passing in Lat/Lng and allowing for browser geolocation
```js
<MyMap
  lat={39.28756}
  lng={-120.19987}
/>
```

### Passing in Lat/Lng and not allowing browser geolocation
```js
<MyMap
  lat={39.28756}
  lng={-120.19987}
  noGeolocation
/>
```

### No props will use the default lat/lng and ask for permission
```js
<MyMap />
```


## Testing

* ```npm test``` Runs all tests.
* ```npm run test:src``` only runs the tests in src in watch mode.

## Add, Commit, Version

Since the branch must be clean to version and publish, we need to:

* add
* commit, which will:
 * Run linting and tests because of pre-commit hooks.

```bash
git add .
git commit -m 'some totally useful comment'
```

Next, we need to run:
* version, which will:
 * Rerun linting and tests
 * Transpile the JavaScript with babel
 * Git add the dst directory and package.json using the version number as the commit message
 * Push the changes to Github
 * Publish to npm
 * Delete the dst directory

```bash   
npm version <major | minor | patch>
```
