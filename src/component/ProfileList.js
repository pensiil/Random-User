import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

class ProfileList extends React.Component {
    state = {
        data: []
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api')
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log('Woops..!! Error!!', error.message);
        });
    }
}

export default ProfileList;
