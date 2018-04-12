import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner} from './src/Components/main';
import LoginForm from './src/Components/LoginForm';
export default class App extends React.Component {

  state = { loggedIn: '' };

  componentDidMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDjZfHiPity1l5xhr16kNAdy4tCRFy3NAM",
      authDomain: "auth-daa48.firebaseapp.com",
      databaseURL: "https://auth-daa48.firebaseio.com",
      projectId: "auth-daa48",
      storageBucket: "auth-daa48.appspot.com",
      messagingSenderId: "906871840375"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

