import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Container, Text, Button, Card, CardItem, Input } from 'native-base';
import getDirections from 'react-native-google-maps-directions'
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import Geocoder from 'react-native-geocoder';
import axios from 'axios'

export default class PlaceDetails extends Component {
    static navigationOptions = {
        title: 'Place Details',
    }
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.getDirections = this.getDirections.bind(this);
    this.getDirectionRoute = this.getDirectionRoute.bind(this);
        this.state = {
            destlat: '',
            destlong: '',
            srclat: 24.8825,
            srclong: 67.0694,
            dest: '',
            coords: []
        }
    }
    componentWillMount() {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    srclat: position.coords.latitude,
                    srclong: position.coords.longitude,
                })

            },
            (error) => console.log(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        this.setState({ destlat:this.props.navigation.state.params.geometry.location.lat,
            destlong: this.props.navigation.state.params.geometry.location.lat });


    }
    
 getDirectionRoute() {   let arr1 = `${this.state.srclat}` + ',' + `${this.state.srclong}`
    let arr2 = `${this.state.destlat}` + ',' + `${this.state.destlong}`
    this.getDirections(arr1, arr2);
}
    async getDirections(startLoc, destinationLoc) {
        console.log(startLoc, destinationLoc)
        try {
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}`)
            let respJson = await resp.json();
            let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            let coords = points.map((point, index) => {
                return {
                    latitude: point[0],
                    longitude: point[1]
                }
            })
            this.setState({ coords: coords })
            return coords
        } catch (error) {
            alert(error)
            return error
        }
    }

    render() {
        console.log(params)
        const { params } = this.props.navigation.state;
        console.log("Params", params.geometry.location.lat)
        console.log("params", params.geometry.location.lng)
        return (
            <Container style={styles.container} >
                <MapView.Callout style={styles.button} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >
                        Name: {params.name}
                    </Text>

                    <Text>Address: {params.vicinity}</Text>
                    <Text>Rating: {params.rating}</Text>
                    <Button><Text>Get Directions</Text></Button>
                </MapView.Callout>
                <MapView style={styles.map} initialRegion={{
                    latitude: parseFloat(this.state.srclat),
                    longitude: parseFloat(this.state.srclong),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}>

                    <MapView.Polyline
                        coordinates={this.state.coords}
                        strokeWidth={2}
                        strokeColor="red" />


                </MapView>
            </Container>
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
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 1,
        width: null,
        height: 300,
        zIndex: 2
    },
    button: {
        zIndex: 2
    }
})