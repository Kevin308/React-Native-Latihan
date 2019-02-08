import React , { Component } from 'react';
import firebase from '@firebase/app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Main from './src/components/main';

class app extends Component {

  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAJWhU0phIvUM0va8NBFDrq8VswW-Xaj1A",
      authDomain: "latmanagerjc7.firebaseapp.com",
      databaseURL: "https://latmanagerjc7.firebaseio.com",
      projectId: "latmanagerjc7",
      storageBucket: "latmanagerjc7.appspot.com",
      messagingSenderId: "70482108872"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}> 
          <Main />
      </Provider>
    )
  }
}

export default app;