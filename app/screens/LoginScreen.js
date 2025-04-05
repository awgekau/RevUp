import React, { useState } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	StyleSheet,
	Pressable,
	Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
	const [userCred, setUserCred] = useState({ uname: '', pwd: '' });
	const navigation = useNavigation();

	const handleChange = (name, value) => {
		setUserCred((prev) => ({ ...prev, [name]: value }));
	};

	const handleLogin = async () => {
		try {
			// Uncomment if you have an API function, e.g., await loginUser(userCred);
			// For demonstration, we'll navigate to a Chat screen (change as needed)
			navigation.navigate('Chat');
		} catch (error) {
			Alert.alert('Login failed. Check your credentials.');
			console.error(error);
		}
	};

	return (
		<SafeAreaView style={styles.safeContainer}>
			<View style={styles.container}>
				<View style={styles.formContainer}>
					<Text style={styles.title}>Login to revUp</Text>

					<View style={styles.inputContainer}>
						<Text style={styles.label}>Username</Text>
						<TextInput
							style={styles.input}
							placeholder="Enter username"
							value={userCred.uname}
							onChangeText={(text) => handleChange('uname', text)}
							autoCapitalize="none"
						/>
					</View>

					<View style={styles.inputContainer}>
						<Text style={styles.label}>Password</Text>
						<TextInput
							style={styles.input}
							placeholder="Enter password"
							secureTextEntry
							value={userCred.pwd}
							onChangeText={(text) => handleChange('pwd', text)}
						/>
					</View>

					<Pressable style={styles.button} onPress={handleLogin}>
						<Text style={styles.buttonText}>Login</Text>
					</Pressable>

					<Text style={styles.signupText}>
						Don’t have an account?{' '}
						<Text
							style={styles.signupLink}
							onPress={() =>
								navigation.navigate('Registration', { headerTitle: 'Welcome' })
							}>
							Sign Up
						</Text>
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeContainer: {
		flex: 1,
		backgroundColor: '#fff',
	},
	container: {
		flex: 1,
		// Center form vertically and horizontally
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	formContainer: {
		width: '100%',
		maxWidth: 400,
		padding: 20,
		backgroundColor: '#fff',
		borderRadius: 8,
		// iOS shadow
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		// Android elevation
		elevation: 5,
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#1f2937',
		marginBottom: 20,
		textAlign: 'center',
	},
	inputContainer: {
		marginBottom: 15,
	},
	label: {
		color: '#4b5563',
		marginBottom: 5,
		fontSize: 16,
	},
	input: {
		backgroundColor: '#f3f4f6',
		borderColor: '#d1d5db',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 8,
		fontSize: 16,
		color: '#000',
	},
	button: {
		backgroundColor: '#3b82f6',
		paddingVertical: 12,
		borderRadius: 5,
		marginTop: 10,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		textAlign: 'center',
		fontWeight: '600',
	},
	signupText: {
		marginTop: 15,
		color: '#6b7280',
		textAlign: 'center',
	},
	signupLink: {
		color: '#3b82f6',
		textDecorationLine: 'underline',
	},
});
