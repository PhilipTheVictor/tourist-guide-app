import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { CardSection, Button, Input } from '../.././common'


export class RegisterComponent extends Component {

    constructor(props) {
        super(props);

    }
    initMap() {
    }
    render() {
        const { navigate } = this.props.navigation;
        return (<View>
            <CardSection>
               <Text>RegisterComponent</Text>
            </CardSection>
        </View>
        )
    }
}
RegisterComponent.navigationOptions = {
    title: ' Patient Registeration',
};