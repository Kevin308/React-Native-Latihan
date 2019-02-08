import React from 'react';
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({ size }) => {
    return (
        <View style={style.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const style = {
    spinnerStyle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };