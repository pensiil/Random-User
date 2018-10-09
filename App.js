import React from 'react';
import { View, Text } from 'react-native';

import Header from './src/component/Header';
import ProfileList from './src/component/ProfileList';

const App = () => {
	return (
		<View style={{flex: 1}}>
			<Header headerText={'Random User'} />
			<ProfileList />
		</View>
	)
};

export default App;

