import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AuthProvider } from '../../providers/auth/auth';
import { Facebook } from '@ionic-native/facebook'
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public facebook: Facebook, 
              private afAuth: AngularFireAuth, 
              public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginCellPhone(){
    this.navCtrl.push(RegisterPage);
  }

  loginWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        console.log("holi")
        this.navCtrl.push(RegisterPage);
        
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
    }
  }

}
