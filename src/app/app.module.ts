import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

//Services
import { SpotifyService } from './services/spotify.service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Pipes

import { NopicPipe } from './pipes/nopic.pipe';
import { SafedomPipe } from './pipes/safedom.pipe';


@NgModule({
  declarations: [
    MyApp,
    NopicPipe,
    SafedomPipe,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    SpotifyService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
