import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, OAuthService, UrlHelperService, OAuthLogger } from 'angular-oauth2-oidc';
import { AuthService } from '../services/auth.service';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    WelcomePageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterLink,
    HttpClientModule,
    AuthModule
  ],
  exports: [
    WelcomePageComponent,
    HeaderComponent
  ],
  providers:[
    UrlHelperService,
    OAuthService
  ]
})
export class InitialPageModule { }
