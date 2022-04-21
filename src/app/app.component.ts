import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
	var firebaseConfig = {
		apiKey: "AIzaSyBWiNkhGopRNShIv5GiywJMh8obuaeRNd8",
		authDomain: "transcolis-18522.firebaseapp.com",
		projectId: "transcolis-18522",
		storageBucket: "transcolis-18522.appspot.com",
		messagingSenderId: "52965418386",
		appId: "1:52965418386:web:c6d700d2462d67ddb58d4b"
	  };
	  	firebase.initializeApp(firebaseConfig);
  }
}
