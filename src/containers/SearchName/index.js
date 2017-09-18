import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import { Card, CardSection, Button } from '../.././common'
import getDirections from 'react-native-google-maps-directions'

export class SearchByNameComponent extends Component {

 handleGetDirections = () => {
   const data = {
      source: {
       latitude: -33.8356372,
       longitude: 18.6947617
     },
     destination: {
       latitude: -33.8600024,
       longitude: 18.697459
     },
     params: [
       {
         key: "dirflg",
         value: "w"
       }
     ]
   }

   getDirections(data)
 }

 render() {
   return (
     <View style={styles.container}>
       <Button onPress={this.handleGetDirections} >Get Directions</Button>
       
     </View>
   );
 }
}

      const styles = StyleSheet.create({
        container: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        button : {
            width : 50,
            height: 50
        },
      });

SearchByNameComponent.navigationOptions = {
    title: 'Search Places Nearby'
}