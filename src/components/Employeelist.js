import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

class employeelist extends Component {
    render() {
        return (
            <View>
                <Header
                    placement='left'
                    leftComponent={{
                        icon: 'menu',
                        color: '#fff',
                        onPress: () => this.props.navigation.toggleDrawer()
                    }}
                    centerComponent={{ text: 'Menu', style: { color: '#fff'}}}
                />
                <Text>Ini Employee List Page</Text>
            </View>
        );
    }
}

export default employeelist;