import React, { Component } from 'react'
import { AsyncStorage, View, StyleSheet } from 'react-native'
import { Card, CardSection, LibraryList, LibraryItem } from '../.././common'
import PlacesAutoComplete from 'react-native-places-autocomplete'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

export class PlacesList extends Component {
    static navigationOptions = {
        header: false
    }
    constructor(props) {
        super(props);

        this.state = {}
    }
    render() {
        return (
            <Container  style={{ flex: 1, marginTop: 64 }}>
                <PlacesAutoComplete
                    apikey="AIzaSyDmqxUoJZ9VikePf4zjGiuVAnpYAlUODEo"
                    rankby="distance"
                    radius="500"
                    type="restaurant|department_store|pharmacy|book_store|meal_delivery|meal_takeaway|bar"
                    iconColor="#FC1D47"
                    merchantNameColor="#37383B"
                    searchText={this.state.searchText}
                    searchInput={
                         <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input ref='searchBar'
                            placeholder='Search'
                            onChangeText={text => {
                                console.log(text);
                                this.setState({ searchText: text });
                            }}
                            onSearchButtonPress={() => {
                            }}
                            onCancelButtonPress={() => {
                            }} 
                            onSelect={(details) => { // When you select a merchant this will be triggered.
                        console.log(details);
                    }} />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>} />
        </Container>

        );
    }
}

// PlaceList.navigationOptions = {
//     title: 'Places List'