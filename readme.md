# React Geolocation HOC

This is a small HOC that injects browser geolocation into the child component.

## Usage:

**OPTIONAL: Pass in Props that are passed to the child:**
These can be used if you want to display a particular location if the user chooses not to accept your location request.

* lat: Latitude: Number
* lng: Longitude: Number
* noGeolocation: Boolean - True === geolocation disabled, will not ask

**Child receives props**
* lat: Latitude: Number - Default latitude if geolocation is not used
* lng: Longitude: Number - Default latitude if geolocation is not used
* geolocation: Boolean - True: geolocation allowed by user, False, geolocation blocked by user
* timestamp: Unix time in seconds the getCurrentPosition event or optional props passed.


### Install
```js
npm install @hypersprite/react-geolocation-hoc --save
```
Example assumes child component is named "MyMap", it could be any component name.

### Import into child component ```my-map.jsx```
```js
/** with your imports */
import ExtGeolocation from '@hypersprite/react-geolocation-hoc';
/** local imports etc... */

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

### When you use your component:

#### Uses default lat/lng and ask for permission
```js
<MyMap />
```

#### Assigns a default lat/lng and allows for browser geolocation
```js
<MyMap
  lat={39.28756}
  lng={-120.19987}
/>
```

#### Assigns a lat/lng and disables browser geolocation
```js
<MyMap
  lat={39.28756}
  lng={-120.19987}
  noGeolocation
/>
```

## Testing

Testing provided by Jest, Enzyme and coverage report by Istanbul

* ```npm test``` Runs all tests.
* ```npm run test:src``` only runs the tests in src in watch mode.

## Add+Commit, Version

> The branch must be clean to version and publish

* Add
* Commit, which will:
 * Run linting and tests with pre-commit hooks.

```bash
git add .
git commit -m 'some totally useful comment'
```

Next, we need to Version:
* version, which will:
 * Rerun linting and tests
 * Updates the package.json version numnber based on Major, Minor and Patch
 * Git add package.json using the version number as the commit message
 * Push the changes to Github
 * Transpile the JSX to ES5 with babel into the dst/ directory
 * Publish to npm
 * Delete the dst directory

```bash   
npm version <major | minor | patch>
```
