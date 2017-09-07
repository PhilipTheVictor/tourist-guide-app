import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { CardSection, Button, Input } from '../.././common'
import MapView from 'react-native-maps'

export class RegisterComponent extends Component {

    constructor(props) {


    }
    initMap() {
    }
    render() {
        const { navigate } = this.props.navigation;
        return (<View>
            <CardSection>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </CardSection>
        </View>
        )
    }
}
RegisterComponent.navigationOptions = {
    title: ' Patient Registeration',
};