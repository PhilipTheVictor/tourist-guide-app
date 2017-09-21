import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Card, CardSection, Button } from '../.././common'
// import ResponsiveImage from 'react-native-responsive-image'

export class DashboardComponent extends Component {
    constructor(props){
        super(props);
        console.disableYellowBox = true;
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
               
                <CardSection>
                    <Text>Dashboard</Text>
                </CardSection>
                <View>
                    <View >
                        <CardSection>
                            <Button onPress={() => navigate('Reg')}>
                                Register
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button onPress={() => navigate('SearchN')}>
                                Search a Destination
                        
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button onPress={() => navigate('PlacesList')}>
                                Find Places Nearby
                     
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button onPress={() => alert("You have signed out successfully")}>
                                Sign Out
                    
                            </Button>
                        </CardSection>
                    </View>
                </View>
            </View>
        )
    }
}
// let styles = StyleSheet.create({
//     container : {
//         width: 400,
//         height: 1000

//     },
//     img: {
//         width: 100,
//         height: 100,
//     },
// });

DashboardComponent.navigationOptions = {
    title: 'Dashboard'
}
