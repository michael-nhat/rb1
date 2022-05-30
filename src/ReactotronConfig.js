// import AsyncStorage from '@react-native-community/async-storage';
// import Reactotron from 'reactotron-react-native';
// import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import Reactotron from 'reactotron-react-js';

// Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
//   .configure({
//     name: 'Name Here',
//     // createSocket: path => new ReactotronFlipper(path),
//     port: 9090,
//     // host: '192.168.1.227',
//     host: '172.16.13.110',
//     // ...
//   }) // controls connection & communication settings
//   .useReactNative() // add all built-in react native plugins
//   .use(reactotronRedux())
//   .use(reactotronSaga())
//   .connect(); // let's connect!
// // console.log('wtf');

console.log(Reactotron, 1111);

Reactotron.configure({
  name: 'Name Here',
  // createSocket: path => new ReactotronFlipper(path),
  port: 9090,
  // host: '192.168.1.227',
  // host: '172.16.13.110',
  //     // ...
}) // we can use plugins here -- more on this later
  .use(reactotronRedux())
  .use(reactotronSaga())
  .connect(); // let's connect!
