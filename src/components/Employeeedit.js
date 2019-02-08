import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

class employeeedit extends Component {
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
                    rightComponent={{
                        icon: 'home',
                        color: '#fff',
                        onPress: () => this.props.navigation.navigate('Employeelist')
                    }}
                />
                <Text>Ini Employee Edit Page</Text>
            </View>
        );
    }
}

export default employeeedit;