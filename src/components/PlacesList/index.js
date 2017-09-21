import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Dimensions,
    ListView
} from 'react-native';
import { Container, Input } from 'native-base';
import MapView from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';
import axios from 'axios';
import List from '../Places/';


export default class PlacesList extends Component {
    static navigationOptions = {
        header: false
    }
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.onValueChange = this.onValueChange.bind(this);
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dist: 250,
            region: {
                latitude: 24.8825,
                longitude: 67.0694,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
            marker: {
                latitude: 0,
                longitude: 0
            },
            details: []
        }
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                // console.warn(latitude,longitude)
                var region = {
                    latitude,
                    longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }
                this.setState({
                    region
                })
            },
            (err) => console.warn(err.message)
        )


    }
    onValueChange(value) {
        this.setState({ dist: value });
        this.getNearbyPlaces();
    }


    getNearbyPlaces() {
        let lat = this.state.region.latitude;
        let lng = this.state.region.longitude;
        let dist = this.state.dist;
        console.log(dist)
        let completeUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${dist}&key=AIzaSyDmqxUoJZ9VikePf4zjGiuVAnpYAlUODEo`
        console.log('url', completeUrl)
        axios.get(completeUrl)
            .then(
            response => {
                console.log('fetch nearby success', response.data.results);
                this.setState({
                    details: response.data.results
                })
            })

            .catch(
            error => {
                console.log('fetch nearby error', error)
            })
    }


    render() {
        let dataSource = this.ds.cloneWithRows(this.state.details)
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Input onChangeText={(dist) => { this.onValueChange(dist) }} />

                <MapView
                    showsUserLocation={true}
                    followsUserLocation={true}
                    showsCompass={true}
                    showsPointOfInternet={false}
                    toolbarEnabled={true}
                    style={styles.map}
                    region={this.state.region}
                    provider="google"
                    mapType="standard"

                >
                    <MapView.Marker
                        coordinate={this.state.marker}
                    >
                    </MapView.Marker>
                </MapView>
                <View style={styles.container1}>
                    <ListView
                        dataSource={dataSource}
                        enableEmptySections={true}
                        renderRow={(details) => (
                            <List seedetails={(name) => navigate('PlaceDetails', name)} name={details} />
                        )}
                    >
                    </ListView>
                </View>
            </View>
        );
    }
}
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    map: {
        marginTop: 10,
        height: 200,
        width: width - 50
    },
    container1: {
        flex: 1,
        marginTop: 20
    },
    pin: {
        backgroundColor: "#fffa",
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    },
    pinImage: {
        width: 20,
        height: 20
    },
    pinText: {
        color: 'red'
    },
    callout: {
        flex: 1,
        paddingRight: 10,
        paddingBottom: 10,
        marginBottom: 10,
        marginRight: 10
    },
    calloutPhoto: {
        flex: 1,
        width: 200,
        height: 80
    },
    calloutTitle: {
        fontSize: 16
    },
    input: {
        height: 60,
        paddingLeft: 10,
        width: width - 50,
    }
});