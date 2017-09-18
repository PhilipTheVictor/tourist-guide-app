import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { LogInComponent, SignUpComponent, PlacesList, MainComponent, DashboardComponent, RegisterComponent, SearchByNameComponent } from './src'
import { CardSection, Button, Card } from './src/common'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCHky1AxcqJU1gjGFyywuaiOXgbNPe1pcY",
  authDomain: "webquickstart-dc649.firebaseapp.com",
  databaseURL: "https://webquickstart-dc649.firebaseio.com",
  projectId: "webquickstart-dc649",
  storageBucket: "webquickstart-dc649.appspot.com",
  messagingSenderId: "877853644256"
};
firebase.initializeApp(config);


export default class touristguide extends Component {
  static navigationOptions = { // for title 
    title: 'Tourist Guide Application',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <CardSection>
          <Button onPress={() => navigate('Home')}>
            Get Started!
       </Button>
        </CardSection>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Main: { screen: DashboardComponent },
  Home: { screen: MainComponent },
  Dashboard: { screen: DashboardComponent },
  Reg: { screen: RegisterComponent },
  SearchN: { screen: SearchByNameComponent },
  PlacesList: { screen: PlacesList },
  LogIn: { screen: LogInComponent },
  SignUp : { screen: SignUpComponent }
});

AppRegistry.registerComponent('touristguide', () => SimpleApp);
