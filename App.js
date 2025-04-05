// App.js
import React from 'react';
import { Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Welcome">
				<Stack.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={({ navigation }) => ({
						headerShown: true,
						title: 'Login',
						headerLeft: () => (
							<Pressable onPress={() => navigation.navigate('Welcome')}>
								<Text style={{ marginLeft: 10, color: '#3b82f6' }}>
									Back
								</Text>
							</Pressable>
						),
					})}
				/>
				<Stack.Screen
					name="Registration"
					component={RegistrationScreen}
					options={({ navigation, route }) => ({
						// If headerTitle param is passed, use it; otherwise, default to "Registration"
						headerShown: true,
						title: route.params?.headerTitle || 'Registration',
						headerLeft: () => (
							<Pressable onPress={() => navigation.navigate('Welcome')}>
								<Text style={{ marginLeft: 10, color: '#3b82f6' }}>
									Back
								</Text>
							</Pressable>
						),
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
