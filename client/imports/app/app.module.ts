import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { AccountComponent } from './account/account.component';
import { PlayComponent } from './play/play.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'error',
        component: ErrorComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },       
      {
        path: 'play',
        component: PlayComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      // Home Page
      {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
      },
      // 404 Page
      {
        path: '**',
        component: ErrorComponent
      }
    ], { enableTracing: false} ),
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    AccountComponent,
    ErrorComponent,
    LoginComponent,
    PlayComponent,
    WelcomeComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
  ]
})

export class AppModule { }
