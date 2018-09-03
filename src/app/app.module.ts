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
import { DatePicker } from '@ionic-native/date-picker';

//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';


import { LoginPageModule } from '../pages/login/login.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

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
    HomePage,
    RegisterPage
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
    HomePage,
    RegisterPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    AuthProvider,
    DatePicker
  ]
})
export class AppModule {}
