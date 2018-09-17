import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

//providers
import { Facebook } from '@ionic-native/facebook'
import { AuthProvider } from '../providers/auth/auth';
import { ApiRestProvider } from '../providers/api-rest/api-rest';


//pages
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LoginPageModule } from '../pages/login/login.module';
import { HomeTabsPage } from '../pages/home-tabs/home-tabs';
import { VerificationPage } from '../pages/verification/verification';
import { NewTripPage } from '../pages/new-trip/new-trip';

//components
import { ExpandableComponent } from '../components/expandable/expandable'
 
//firebase
import firebase from 'firebase';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/';

var firebaseConfig = {
    apiKey: "AIzaSyALeMKCIUJIzM8G94wtc1iW9nIQBySR7oA",
    authDomain: "motoapp-b9507.firebaseapp.com",
    databaseURL: "https://motoapp-b9507.firebaseio.com",
    projectId: "motoapp-b9507",
    storageBucket: "motoapp-b9507.appspot.com",
    messagingSenderId: "772050837774"
};



@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    HomeTabsPage,
    VerificationPage,
    NewTripPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    LoginPageModule,
    HttpModule,
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    LoginPage,
    HomeTabsPage,
    VerificationPage,
    NewTripPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    AuthProvider,
    ApiRestProvider,
    ExpandableComponent
  ]
})
export class AppModule {}
