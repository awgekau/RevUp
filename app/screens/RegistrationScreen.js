// App/screens/RegistrationScreen.js
import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Pressable,
	Alert,
	ScrollView,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { useNavigation } from '@react-navigation/native';
// import { signupUser } from '../api/api'; // Uncomment if you have an API function

export default function RegistrationScreen() {
	const [userData, setUserData] = useState({
		real_name: '',
		uname: '',
		phone_no: '',
		pwd: '',
		age: '',
		country: '',
	});
	const navigation = useNavigation();

	const handleChange = (name, value) => {
		setUserData((prev) => ({ ...prev, [name]: value }));
	};

	const handleCountrySelect = (country) => {
		// Store the country name (or use country.cca2 for country code)
		setUserData((prev) => ({ ...prev, country: country.name }));
	};

	const handleSignUp = async () => {
		try {
			// Uncomment if you have an API function, e.g., await signupUser(userData);
			Alert.alert('SignUp successful! Please log in.');
			navigation.navigate('Login');
		} catch (error) {
			Alert.alert('SignUp failed. Please try again.');
			console.error(error);
		}
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.formContainer}>
				<Text style={styles.title}>Create an Account</Text>

				{/* Full Name */}
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Full Name</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter full name"
						onChangeText={(text) => handleChange('real_name', text)}
						autoCapitalize="words"
					/>
				</View>

				{/* Username */}
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Username</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter username"
						onChangeText={(text) => handleChange('uname', text)}
						autoCapitalize="none"
					/>
				</View>

				{/* Phone Number & Age side by side */}
				<View style={styles.rowContainer}>
					<View style={[styles.inputContainer, styles.flexItem]}>
						<Text style={styles.label}>Phone Number</Text>
						<TextInput
							style={styles.input}
							placeholder="Enter phone number"
							onChangeText={(text) => handleChange('phone_no', text)}
							keyboardType="phone-pad"
						/>
					</View>
					<View style={[styles.inputContainer, styles.flexItem]}>
						<Text style={styles.label}>Age</Text>
						<TextInput
							style={styles.input}
							placeholder="Enter age"
							onChangeText={(text) => handleChange('age', text)}
							keyboardType="numeric"
						/>
					</View>
				</View>

				{/* Country Picker */}
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Country</Text>
					<CountryPicker
						withFilter
						withFlag
						withCountryNameButton
						onSelect={handleCountrySelect}
						containerButtonStyle={styles.pickerButton}
					/>
					{userData.country ? (
						<Text style={styles.selectedCountry}>
							Selected: {userData.country}
						</Text>
					) : null}
				</View>

				{/* Password */}
				<View style={styles.inputContainer}>
					<Text style={styles.label}>Password</Text>
					<TextInput
						style={styles.input}
						placeholder="Enter password"
						onChangeText={(text) => handleChange('pwd', text)}
						secureTextEntry
					/>
				</View>

				<Pressable style={styles.button} onPress={handleSignUp}>
					<Text style={styles.buttonText}>Sign Up</Text>
				</Pressable>

				<Text style={styles.signupText}>
					Already have an account?{' '}
					<Text
						style={styles.signupLink}
						onPress={() => navigation.navigate('Login')}>
						Login
					</Text>
				</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 20,
	},
	formContainer: {
		width: '100%',
		maxWidth: 400,
		padding: 20,
		backgroundColor: '#fff',
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
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
	pickerButton: {
		backgroundColor: '#f3f4f6',
		borderColor: '#d1d5db',
		borderWidth: 1,
		borderRadius: 5,
		padding: 12,
	},
	selectedCountry: {
		marginTop: 5,
		fontSize: 16,
		color: '#1f2937',
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	flexItem: {
		flex: 1,
		marginRight: 10,
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
