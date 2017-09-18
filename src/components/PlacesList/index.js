import React, { Component } from 'react'
import { AsyncStorage, View, Text,StyleSheet } from 'react-native'
import { Card, CardSection, Button, LibraryList, LibraryItem } from '../.././common'
import MapView from 'react-native-maps'

export class PlacesList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <MapView
                style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
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
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
  
PlacesList.navigationOptions = {
    title: 'Places List'
}