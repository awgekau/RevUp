// App/screens/WelcomeScreen.js
import React from 'react';
import {
	ImageBackground,
	Image,
	StyleSheet,
	View,
	Pressable,
	Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen() {
	const navigation = useNavigation();

	return (
		<ImageBackground
			style={styles.background}
			source={require('../assets/background1.webp')}
			resizeMode="cover">
			{/* Logo at the top */}
			<Image source={require('../assets/revUpLogo.png')} style={styles.logo} />

			{/* Buttons container at the bottom */}
			<View style={styles.buttonsContainer}>
				<Pressable
					onPress={() => navigation.navigate('Login')}
					style={({ pressed }) => [
						styles.buttonBase,
						styles.loginButton,
						pressed && styles.loginButtonPressed,
					]}>
					<Text style={styles.buttonText}>Login</Text>
				</Pressable>

				<Pressable
					onPress={() => navigation.navigate('Registration')}
					style={({ pressed }) => [
						styles.buttonBase,
						styles.registerButton,
						pressed && styles.registerButtonPressed,
					]}>
					<Text style={styles.buttonText}>Register</Text>
				</Pressable>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end', // pushes children to the bottom
		alignItems: 'center', // centers children horizontally
	},
	logo: {
		position: 'absolute',
		top: 50, // adjusts vertical offset
		alignSelf: 'center',
		width: 100, 
		height: 100,
		resizeMode: 'contain',
	},
	buttonsContainer: {
		marginBottom: 40, // distance from the bottom edge
		alignItems: 'center',
	},
	buttonBase: {
		width: 200, 
		height: 60,
		borderWidth: 2,
		borderRadius: 30, 
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
		backgroundColor: 'transparent',
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
	loginButton: {
		borderColor: '#fc5c65',
	},
	loginButtonPressed: {
		backgroundColor: '#fc5c65',
	},
	registerButton: {
		borderColor: '#4ecdc4',
	},
	registerButtonPressed: {
		backgroundColor: '#4ecdc4',
	},
});

export default WelcomeScreen;
