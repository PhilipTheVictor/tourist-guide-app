import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Card, CardSection, Button } from '../.././common'

export class MainComponent extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <StatusBar barStyle="light-content" hidden />
                <Card>
                    <Text>This is the application which provides the tourist with city map depending on its current location
                    detected by the mobile phone sensors. This information helps the tourists
                    to find the desired locations to visit.This project is mainly
beneficial for the tourist’s having no idea about the places they want
to visit. By providing a geographic based information system the tourists
and people shifting to new cities can get a better guidance of the places
they want to visit.
                    </Text>
                </Card>
                <CardSection>
                    <Button onPress={() => navigate('LogIn')}>
                        LogIn
       </Button>
                </CardSection>
            </View>
        )
    }
}

MainComponent.navigationOptions = {
    title: 'Introduction'
}