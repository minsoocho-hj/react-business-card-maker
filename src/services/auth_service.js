import firebase from 'firebase';
import firebaseApp from './firebase';

class Authservice {
	login(providerName) {
		const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
		return firebaseApp.auth().signInWithPopup(authProvider);
	}

	logout() {
		return firebase.auth().signOut();
	}

	onAuthChange(onUserChanged) {
		firebaseApp.auth().onAuthStateChanged((user) => {
			onUserChanged(user);
		});
	}
}

export default Authservice;
