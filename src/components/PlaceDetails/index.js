import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

export default class PlaceDetails extends Component {
    static navigationOptions = {
        title: 'Place Details',
    }

    render() {
        console.log(params)
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container} >

                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >
                    Name: {params.name}
                </Text>

                <Text>Address: {params.vicinity}</Text>
                <Text>Rating: {params.rating}</Text>
            </View>
        );
    }
}

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height,
        alignItems: 'center',
        justifyContent: 'center'
    },

})