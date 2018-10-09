import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const { bgColor, headerText } = props;

    return (
        <View
            style= {{
                height: 60,
                backgroundColor: bgColor || 'teal',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
        <Text style= {{ fontSize: 20, color: 'white' }}>
            {headerText}
        </Text>
        </View>
    );
};

export default Header;