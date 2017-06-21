import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { EffectsModule } from '@ngrx/effects';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StoreModule } from "@ngrx/store";
import { BirthdaysReducer } from '../ngrx/reducers/birthdays.reducer';
import { BirthdayActions } from '../ngrx/actions/birthday.actions';
import { BirthdayServiceProvider } from '../providers/birthday-service/birthday-service';
import { BirthdayEffects } from '../ngrx/effects/birthday.effects';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StoreModule.provideStore({ birthdays: BirthdaysReducer }),
    EffectsModule.run(BirthdayEffects)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BirthdayActions,
    BirthdayServiceProvider
  ]
})
export class AppModule {}
